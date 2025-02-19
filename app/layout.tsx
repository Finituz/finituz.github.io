import { notFound, redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";

import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Finituz Game Studio",
  description: "The official Finituz game studio website.",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  return redirect("/" + locale);
}
