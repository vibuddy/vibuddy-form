"use client";

import { createContext, useContext } from "react";
import { defaultSiteConfig } from "@/config/siteConfig";

export type SiteConfig = typeof defaultSiteConfig;
export type ClientOverride = Partial<SiteConfig>;

type ContextValue = {
  config: SiteConfig;
  previewSlug: string | null;
  /** Rewrites a root-relative path to stay inside the preview prefix */
  linkTo: (path: string) => string;
  /** Strips the preview prefix so active-link detection always works with plain paths */
  stripBase: (pathname: string) => string;
};

const SiteConfigContext = createContext<ContextValue>({
  config: defaultSiteConfig,
  previewSlug: null,
  linkTo: (path) => path,
  stripBase: (pathname) => pathname,
});

export const useSiteConfig = () => useContext(SiteConfigContext);

export function SiteConfigProvider({
  children,
  overrides,
  slug,
}: {
  children: React.ReactNode;
  overrides: ClientOverride;
  slug: string;
}) {
  const config: SiteConfig = { ...defaultSiteConfig, ...overrides };
  const base = `/preview/${slug}`;

  const linkTo = (path: string) => (path === "/" ? base : `${base}${path}`);

  const stripBase = (pathname: string) => {
    if (pathname === base || pathname === `${base}/`) return "/";
    if (pathname.startsWith(`${base}/`)) return pathname.slice(base.length);
    return pathname;
  };

  return (
    <SiteConfigContext.Provider value={{ config, previewSlug: slug, linkTo, stripBase }}>
      {children}
    </SiteConfigContext.Provider>
  );
}
