"use client";

import { ChevronDown, ChevronUp, Info } from "lucide-react";
import React, { useState } from "react";

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  return (
    <div className="w-full border lg:text-sm text-xs mt-3  border-pink-500 bg-disclaimer-background p-3 rounded-md">
      <div className="flex gap-2 items-center">
        <Info stroke="#e4b005" size={18} />
        <p className="w-full font-medium">Strict Notes & Disclaimer</p>
        {showDisclaimer ? (
          <ChevronUp size={21} onClick={() => setShowDisclaimer(false)} />
        ) : (
          <ChevronDown size={21} onClick={() => setShowDisclaimer(true)} />
        )}
      </div>
      <ul
        className="list-disc mt-2 ml-9 space-y-1 text-justify"
        style={{ display: showDisclaimer ? "block" : "none" }}
      >
        <li>
          Tax-loss harvesting is currently not allowed under Indian tax
          regulations. Please consult your tax advisor before making any
          decisions.
        </li>
        <li>
          Tax harvesting does not apply to derivatives or futures. These are
          handled separately as business income under tax rules.
        </li>
        <li>
          Price and market value data is fetched from Coingecko, not from
          individual exchanges. As a result, values may slightly differ from the
          ones on your exchange.
        </li>
        <li>
          Some countries do not have a short-term / long-term bifurcation. For
          now, we are calculating everything as long-term.
        </li>
        <li>
          Only realized losses are considered for harvesting. Unrealized losses
          in held assets are not counted.
        </li>
      </ul>
    </div>
  );
};

export default Disclaimer;
