"use client";

import { formatCrypto, formatUSD } from "@/lib/format";
import { Holding } from "@/types/holding.types";
import Image from "next/image";

export default function Card({ data }: { data: Holding }) {
  const {
    coin,
    coinName,
    logo,
    currentPrice,
    totalHolding,
    averageBuyPrice,
    stcg,
    ltcg,
  } = data;

  const totalValue = totalHolding * currentPrice;

  return (
    <div className="grid lg:grid-cols-8 grid-cols-2 gap-3 px-4 py-3  text-sm">
      {/* assest column */}
      <div className="lg:col-span-2 col-span-1 flex items-center gap-3">
        <input type="checkbox" className="accent-blue-600" />
        <Image
          alt="coinlogo"
          height={50}
          width={50}
          src={logo}
          className="w-7 h-7 rounded-full"
        />
        <div>
          <p className="font-medium">{coinName}</p>
          <p className="text-xs text-gray-500">{coin}</p>
        </div>
      </div>

      {/* holdings column */}
      <div className="col-span-1  text-left">
        <p className="font-medium">
          {totalHolding.toFixed(4)} {coin}
        </p>
        <p className="text-xs text-gray-500">
          {formatUSD(averageBuyPrice)}/{coin}
        </p>
      </div>

      {/* total current value column */}
      <div className="col-span-2  text-center hidden lg:block">
        <p className="font-medium">{formatUSD(currentPrice)}</p>
      </div>

      {/* long term column */}
      <div className="col-span-1 hidden lg:block">
        <p className="text-green-600 font-medium">
          +${formatCrypto(ltcg?.gain || 0)}
        </p>
        <p className="text-xs text-gray-500">
          {formatCrypto(ltcg?.balance || 0)} {coin}
        </p>
      </div>

      {/* short term column */}
      <div className="col-span-1 hidden lg:block">
        <p
          className={`font-medium ${
            stcg.gain >= 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {stcg.gain >= 0 ? "+" : ""}${formatCrypto(stcg.gain)}
        </p>
        <p className="text-xs text-gray-500">
          {formatCrypto(stcg.balance)} {coin}
        </p>
      </div>

      {/* amount to sell column */}
      <div className="col-span-1 text-center hidden lg:block">
        <p className="font-medium">
          {formatUSD(totalValue) === "$0.00" ? "-" : formatUSD(totalValue)}
        </p>
      </div>
    </div>
  );
}
