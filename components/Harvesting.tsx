import React from "react";

type Props = {
  type: "pre" | "after";
  className?: string;
  data?: {
    profits: { short: number; long: number };
    losses: { short: number; long: number };
    gains: { short: number; long: number };
  };
};

const Harvesting = ({ type, className, data }: Props) => {
  return (
    <div
      className={`w-full border border-pink-400  rounded-md p-4 ${className}`}
    >
      <h1 className=" font-semibold text-md mb-3">
        {type === "pre" ? "Pre Harvesting" : "After Harvesting"}
      </h1>

      <div className="grid grid-cols-[50%_25%_25%] gap-y-3 text-sm">
        <div></div>
        <h5>Short-term</h5>
        <h5>Long-term</h5>

        <h5>Profits</h5>
        <p>$ {data?.profits.short ?? 0}</p>
        <p>$ {data?.profits.long ?? 0}</p>

        <h5>Losses</h5>
        <p>$ {data?.losses.short ?? 0}</p>
        <p>$ {data?.losses.long ?? 0}</p>

        <h5 className="font-medium">Net Capital Gains</h5>
        <p>$ {data?.gains.short ?? 0}</p>
        <p>$ {data?.gains.long ?? 0}</p>
      </div>
      <h1 className="my-3 font-bold text-md">
        {type === "pre" ? "Realised" : "Effective"} Capital Gains : {"$834758"}
      </h1>
    </div>
  );
};

export default Harvesting;
