"use client";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import SEO from "../../../next-seo.config";
export const Provider = (props: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEO} />
      {props.children}
    </ThemeProvider>
  );
};
