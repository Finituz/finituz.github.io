import { NextIntlClientProvider } from "next-intl";
import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";

import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz Blog",
  description: "The official Finituz game studio blog website.",
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
  // Ensure that the incoming `locale` is valid

  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started

  return (
    <html lang={locale}>
      <body className={font.className + " text-xl text-white bg-black"}>
        {redirect(`/${locale}`)}
      </body>
    </html>
  );
}
