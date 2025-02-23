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
import ParticlesBG from "./components/ParticlesBG/ParticlesBG";

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
      <head>
        <meta name="google-adsense-account" content="ca-pub-9376449764182229" />
        <GoogleAdsense pId="9376449764182229" />
      </head>
      <body
        className={
          font.className +
          "  relative pb-[600px] md:pb-64 text-xl bg-black text-white"
        }
      >
        <ParticlesBG />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <GoUp />
          <ChangeLanguage />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
