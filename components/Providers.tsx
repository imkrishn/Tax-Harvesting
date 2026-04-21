"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

import { Toaster } from "sonner";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Provider store={store}>
        <Toaster position="top-center" richColors />
        {children}
      </Provider>
    </ThemeProvider>
  );
}
