"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  text: string;
  children: React.ReactNode;
  className?: string;
  position?: "top" | "bottom";
};

export default function Tooltip({
  text,
  children,
  className,
  position = "top",
}: Props) {
  const [show, setShow] = useState(false);

  const isTop = position === "top";

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 z-50 pointer-events-none ${
            isTop ? "bottom-full mb-3" : "top-full mt-3"
          } animate-fadeIn`}
        >
          <div
            className={cn(
              "relative bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg text-xs",
              className,
            )}
          >
            {text}

            <div
              className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 
              border-l-8 border-l-transparent
              border-r-8 border-r-transparent
              ${
                isTop
                  ? "top-full border-t-8 border-t-primary"
                  : "bottom-full border-b-8 border-b-primary"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
