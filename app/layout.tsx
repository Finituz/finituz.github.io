import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finituz Game Studio",
  description: "The official Finituz game studio website.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={font.className + " text-xl text-white bg-black"}>
        {children}
      </body>
    </html>
  );
}
