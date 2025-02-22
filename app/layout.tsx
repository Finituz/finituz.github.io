import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";

import { redirect } from "next/navigation";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz Game Studio",
  description: "The official Finituz game studio website.",
};

export default async function LocaleLayout() {
  return (
    <html>
      <body className={font.className + " text-xl text-white bg-black"}>
        {redirect("/en")}
      </body>
    </html>
  );
}
