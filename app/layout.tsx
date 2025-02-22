import { NextIntlClientProvider } from "next-intl";

import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";

import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz Game Studio",
  description: "The official Finituz game studio website.",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={font.className + " text-xl text-white bg-black"}>
        {redirect("/" + locale)}
      </body>
    </html>
  );
}
