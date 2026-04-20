"use client";

import { CapitalGains } from "@/types/capitalgains.types";
import { Holding } from "@/types/holding.types";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Holdings = () => {
  const [capital, setCapital] = useState<CapitalGains | null>(null);
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [viewAll, setViewAll] = useState(false);
  const [selected, setSelected] = useState<any[]>([]);

  useEffect(() => {
    try {
      fetch("/api/capital-gains")
        .then((res) => res.json())
        .then(setCapital);

      fetch("/api/holdings")
        .then((res) => res.json())
        .then(setHoldings);
    } catch (Err) {
      console.log("Failed to fetch data");
    }
  }, []);

  return (
    <div className="border border-border shadow rounded-md p-4 w-full lg:h-[73vh] overflow-auto  text-muted-foreground">
      <h1 className="font-semibold text-md mb-3">Holdings</h1>
      <div className="grid lg:grid-cols-8 grid-cols-2 gap-3 text-sm bg-secondary-background p-2 rounded-md">
        <div className="lg:col-span-2 col-span-1 inline">
          {" "}
          <input type="checkbox" className="mx-3" />
          Asset
        </div>
        <div className="col-span-1 ">Holdings</div>
        <div className="col-span-2 whitespace-nowrap lg:block hidden">
          Total Current Value
        </div>
        <div className="col-span-1 lg:block hidden">Long term</div>
        <div className="col-span-1 lg:block hidden">Short term</div>
        <div className="col-span-1 lg:block hidden">Amount to Sell</div>
      </div>
      <div>
        {holdings
          .slice(0, viewAll ? holdings.length : 5)
          .map((holding, index) => (
            <Card key={index} data={holding} />
          ))}
      </div>
      {!viewAll && (
        <p
          className="text-sm mx-3 text-blue-600 cursor-pointer mt-2"
          onClick={() => setViewAll(true)}
        >
          View All
        </p>
      )}
    </div>
  );
};

export default Holdings;
