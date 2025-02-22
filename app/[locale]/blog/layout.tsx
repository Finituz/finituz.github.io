import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Finituz Blog",
  description: "The official Finituz game studio blog website.",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
