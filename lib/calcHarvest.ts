import { Holding } from "@/types/holding.types";
import { CapitalGains } from "@/types/capitalgains.types";

export function calculateAfterHarvest(
  base: CapitalGains,
  selected: Holding[],
): CapitalGains {
  const updated: CapitalGains = structuredClone(base);

  selected.forEach((asset) => {
    const stGain = asset.stcg.gain;
    const ltGain = asset.ltcg.gain;

    if (stGain > 0) {
      updated.capitalGains.stcg.profits += stGain;
    } else {
      updated.capitalGains.stcg.losses += Math.abs(stGain);
    }

    if (ltGain > 0) {
      updated.capitalGains.ltcg.profits += ltGain;
    } else {
      updated.capitalGains.ltcg.losses += Math.abs(ltGain);
    }
  });

  return updated;
}
