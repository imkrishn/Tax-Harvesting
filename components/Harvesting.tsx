"use client";

import { CapitalGains, Data } from "@/types/capitalgains.types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  type: "pre" | "after";
  className?: string;
};

const Harvesting = ({ type, className }: Props) => {
  const [capital, setCapital] = useState<CapitalGains | null>(null);
  const [data, setData] = useState<Data>(null);
  const afterHarvested: Data = null;

  useEffect(() => {
    try {
      fetch("/api/capital-gains")
        .then((res) => res.json())
        .then(setCapital);
    } catch (Err) {
      toast.error("Failed to fetch capital data");
      console.log("Failed to fetch capital data");
    }
  }, []);

  useEffect(() => {
    if (type === "after" && afterHarvested) {
      setData(afterHarvested);
    } else {
      const ltcg = capital?.capitalGains.ltcg;
      const stcg = capital?.capitalGains.stcg;
      const stcgGain = (stcg?.profits ?? 0) - (stcg?.losses ?? 0);
      const ltcgGain = (ltcg?.profits ?? 0) - (ltcg?.losses ?? 0);
      const gain = stcgGain + ltcgGain;
      const capitalData = {
        stcg: {
          profits: stcg?.profits ?? 0,
          losses: stcg?.losses ?? 0,
        },
        ltcg: {
          profits: ltcg?.profits ?? 0,
          losses: ltcg?.losses ?? 0,
        },
        stcgGain,
        ltcgGain,
        gain,
      };
      setData(capitalData);
    }
  }, [afterHarvested, type, capital]);

  return (
    <div
      className={`w-full border border-border shadow rounded-md p-4 ${className}`}
    >
      <h1 className=" font-semibold text-md mb-3">
        {type === "pre" ? "Pre Harvesting" : "After Harvesting"}
      </h1>

      <div className="grid grid-cols-[50%_25%_25%] gap-y-3 text-xs">
        <div></div>
        <h5>Short-term</h5>
        <h5>Long-term</h5>

        <h5>Profits</h5>
        <p>$ {data?.stcg.profits}</p>
        <p>$ {data?.ltcg.profits}</p>

        <h5>Losses</h5>
        <p>$ {data?.stcg.losses}</p>
        <p>$ {data?.ltcg.losses}</p>

        <h5 className="font-medium">Net Capital Gains</h5>
        <p>$ {data?.stcgGain}</p>
        <p>$ {data?.ltcgGain}</p>
      </div>
      <h1 className="my-3 font-bold text-md">
        {type === "pre" ? "Realised" : "Effective"} Capital Gains :{" "}
        {capital && <span>$ {data?.gain}</span>}
      </h1>
    </div>
  );
};

export default Harvesting;
