"use client";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import SEO from "../../../next-seo.config";
export const Provider = (props: PropsWithChildren<unknown>) => {
  if (typeof window === "undefined") {
    return <>{props.children}</>;
  }
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      {props.children}
    </ThemeProvider>
  );
};
