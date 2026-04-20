export interface CapitalGainType {
  profits: number;
  losses: number;
}

export interface CapitalGains {
  capitalGains: {
    stcg: CapitalGainType;
    ltcg: CapitalGainType;
  };
}

export type Data = {
  stcg: {
    profits: number;
    losses: number;
  };
  ltcg: {
    profits: number;
    losses: number;
  };
  stcgGain: number;
  ltcgGain: number;
  gain: number;
} | null;
