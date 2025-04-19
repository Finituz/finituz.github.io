"use client";
import { routing, usePathname } from "@/i18n/routing";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ChangeLanguage() {
  const currentPath = usePathname();
  const currentQuery = useSearchParams();
  const { locale } = useParams<{ locale: string }>();

  return (
    <div className="group fixed flex flex-col items-center gap-2 right-2 top-52 z-20 cursor-pointer">
      <i id="locale" className="text-center bg-red-900 rounded-full p-5 border">
        {
          <Image
            alt={locale + " flag"}
            src={`/imgs/flags/${locale}.svg`}
            width={25}
            height={25}
          />
        }
      </i>
      <ul className="absolute hidden opacity-0 bg-red-900 border  gap-2 rounded-xl top-14 right-14 w-32 group-hover:flex group-hover:opacity-100 cursor-pointer  duration-500 transition-opacity flex-col p-5">
        {routing.locales.map((loc, key) => {
          let selected;

          if (loc == locale) {
            selected = "bg-red-500";
          }

          return (
            <li
              key={key}
              className={"flex hover:bg-red-500 p-2 rounded-xl " + selected}
            >
              <Link
                href={`/${loc}/${currentPath}?${currentQuery}`}
                className="flex"
              >
                <Image
                  alt={loc + " flag"}
                  src={`/imgs/flags/${loc}.svg`}
                  width={25}
                  height={25}
                />
                &nbsp;&nbsp;
                {loc}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ChangeLanguage />
    </Suspense>
  );
}
