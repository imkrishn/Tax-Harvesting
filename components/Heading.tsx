"use client";

import Tooltip from "./Tooltip";

const text =
  "Tax loss harvesting is a strategy used by investors to minimize their tax liability by selling investments that have experienced a loss.";

const Heading = () => {
  return (
    <div className="flex items-end gap-2">
      <h1 className="lg:text-2xl text-xl font-bold opacity-85">
        Tax Harvesting
      </h1>

      <Tooltip text={text} position="bottom" className="w-64">
        {" "}
        <p className="text-xs font-medium pb-1 text-blue-500 underline cursor-pointer">
          How it Works?
        </p>
      </Tooltip>
    </div>
  );
};

export default Heading;
