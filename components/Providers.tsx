"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function setUp() {
      setMounted(true);
    }

    setUp();
  }, []);

  if (!mounted) return null;

  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Toaster position="top-center" richColors />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
