import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GoUp from "./components/GoUp/GoUp";
import ChangeLanguage from "./components/ChangeLanguage/ChangeLanguage";

import { locales } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import GoogleAdsense from "./components/GoogleAdsense/GoogleAdsense";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz Game Studio",
  description: "The official Finituz game studio website.",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`@/locale/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
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

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={font.className + " text-xl text-white bg-black"}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <GoUp />
          <ChangeLanguage />
          {children}
          <Footer />
          <GoogleAdsense pId="9376449764182229" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
