import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["br", "en"];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: locales,
  localePrefix: "always",
  localeDetection: false,
  defaultLocale: "en",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
