"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const text =
  "Tax loss harvesting is a strategy used by investors to minimize their tax liability by selling investments that have experienced a loss.";

const Heading = () => {
  return (
    <div className="flex items-end gap-2">
      <h1 className="lg:text-2xl text-xl font-bold opacity-85">
        Tax Harvesting
      </h1>

      <Tooltip key={"bottom"}>
        <TooltipTrigger asChild>
          <p className="text-xs font-medium pb-1 text-blue-500 underline cursor-pointer">
            How it Works?
          </p>
        </TooltipTrigger>
        <TooltipContent
          className="bg-background text-muted-foreground border border-border rounded-lg"
          sideOffset={3}
          side={"bottom"}
        >
          <p className="inline">
            {text}{" "}
            <a href="#" className="text-blue-500">
              Know more...
            </a>
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default Heading;
