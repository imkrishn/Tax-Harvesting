export function formatUSD(value: number): string {
  const abs = Math.abs(value);

  if (abs >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }

  if (abs >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`;
  }

  return `$${value.toFixed(2)}`;
}

export function formatCrypto(value: number) {
  if (!value) return "0";

  const abs = Math.abs(value);

  if (abs < 1e-8) return "~0";

  if (abs < 0.0001) {
    return value.toFixed(10).replace(/\.?0+$/, "");
  }

  if (abs < 1) {
    return value.toFixed(6).replace(/\.?0+$/, "");
  }

  return value.toFixed(3);
}
