import { CapitalGains } from "@/types/capitalgains.types";
import { Holding } from "@/types/holding.types";

const round = (n: number, d = 4) => Math.round(n * 10 ** d) / 10 ** d;

export function calculateAfterHarvest(base: CapitalGains, selected: Holding[]) {
  const updated = structuredClone(base.capitalGains);

  selected.forEach((asset) => {
    const stGain = asset.stcg.gain;
    const ltGain = asset.ltcg.gain;

    if (stGain > 0) {
      updated.stcg.profits += round(stGain);
    } else {
      updated.stcg.losses += Math.abs(stGain);
    }

    if (ltGain > 0) {
      updated.ltcg.profits += round(ltGain);
    } else {
      updated.ltcg.losses += Math.abs(ltGain);
    }
  });

  const finalData = {
    stcg: {
      profits: updated.stcg.profits,
      losses: updated.stcg.losses,
    },
    ltcg: {
      profits: updated.ltcg.profits,
      losses: updated.ltcg.losses,
    },
    stcgGain: round(updated.stcg.profits - updated.stcg.losses),
    ltcgGain: round(updated.ltcg.profits - updated.ltcg.losses),
    gain: round(
      updated.stcg.profits -
        updated.stcg.losses +
        updated.ltcg.profits -
        updated.ltcg.losses,
    ),
  };

  return finalData;
}
