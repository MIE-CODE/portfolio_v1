"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import Home from "../page";
export const Provider = (props: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Home />
    </ThemeProvider>
  );
};
