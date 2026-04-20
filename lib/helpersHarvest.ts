import { CapitalGains, CapitalGainType } from "@/types/capitalgains.types";

export const getNet = (g: CapitalGainType) => g.profits - g.losses;

export const getRealised = (data: CapitalGains) =>
  getNet(data.stcg) + getNet(data.ltcg);
