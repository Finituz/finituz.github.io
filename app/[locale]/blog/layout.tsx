import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "../globals.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GoUp from "../components/GoUp/GoUp";
import ChangeLanguage from "../components/ChangeLanguage/ChangeLanguage";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz blog",
  description: "The official Finituz game studio blog website.",
};

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

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={font.className + " text-xl text-white bg-black"}>
        <NextIntlClientProvider messages={messages}>
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
