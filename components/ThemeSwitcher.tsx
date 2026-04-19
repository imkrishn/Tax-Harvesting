"use client";

import { ToggleLeft, ToggleRight } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <ToggleLeft
          className="text-gray-500 cursor-pointer"
          size={24}
          onClick={() => setTheme("dark")}
        />
      ) : (
        <ToggleRight
          className="cursor-pointer"
          size={24}
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
};

export default ThemeSwitcher;
