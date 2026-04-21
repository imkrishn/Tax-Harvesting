"use client";

import { RootState } from "@/redux/store";
import { CapitalGains, Data } from "@/types/capitalgains.types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

type Props = {
  type: "before" | "after";
  className?: string;
};

const Harvesting = ({ type, className }: Props) => {
  const [capital, setCapital] = useState<CapitalGains | null>(null);
  const [data, setData] = useState<Data>(null);
  const afterHarvested: Data = useSelector(
    (state: RootState) => state.afterHarvestingData,
  );

  const ltcg = capital?.capitalGains.ltcg;
  const stcg = capital?.capitalGains.stcg;
  const stcgGain = (stcg?.profits ?? 0) - (stcg?.losses ?? 0);
  const ltcgGain = (ltcg?.profits ?? 0) - (ltcg?.losses ?? 0);
  const gain = stcgGain + ltcgGain;

  useEffect(() => {
    try {
      fetch("/api/capital-gains")
        .then((res) => res.json())
        .then(setCapital);
    } catch {
      toast.error("Failed to fetch capital data");
      console.log("Failed to fetch capital data");
    }
  }, []);

  useEffect(() => {
    function intilizeData() {
      const data =
        type === "after" && afterHarvested
          ? afterHarvested
          : {
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

      setData(data);
    }

    intilizeData();
  }, [type, capital, afterHarvested]);

  return (
    <div
      className={`w-full border border-border shadow rounded-md p-4 ${className}`}
    >
      <h1 className=" font-semibold text-md mb-3">
        {type === "before" ? "Before Harvesting" : "After Harvesting"}
      </h1>

      <div className="grid grid-cols-[50%_25%_25%] gap-y-3 text-xs">
        <div></div>
        <h5>Short-term</h5>
        <h5>Long-term</h5>

        <h5>Profits</h5>
        <p>$ {data?.stcg.profits.toFixed(2)}</p>
        <p>$ {data?.ltcg.profits.toFixed(2)}</p>

        <h5>Losses</h5>
        <p>$ {data?.stcg.losses.toFixed(2)}</p>
        <p>$ {data?.ltcg.losses.toFixed(2)}</p>

        <h5 className="font-medium">Net Capital Gains</h5>
        <p>$ {data?.stcgGain.toFixed(2)}</p>
        <p>$ {data?.ltcgGain.toFixed(2)}</p>
      </div>
      <h1 className="my-3 font-bold text-md">
        {type === "before" ? "Realised" : "Effective"} Capital Gains :{" "}
        {capital && <span>$ {data?.gain.toFixed(2)}</span>}
      </h1>
      {type === "after" && data && data?.gain < gain && (
        <h1 className="ml-3 mt-3 font-semibold text-sm">
          Your Capital gain reduced by $ {(data?.gain - gain).toFixed(2)}
        </h1>
      )}
    </div>
  );
};

export default Harvesting;
