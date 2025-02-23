"use client";
import { routing, usePathname } from "@/i18n/routing";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ChangeLanguage() {
  const [currentLanguage, setCurrentLanguage] = useState("");
  const currentPath = usePathname();
  useEffect(() => setCurrentLanguage(document.documentElement.lang), []);

  return (
    <div className="group fixed flex flex-col items-center gap-2 right-2 top-52 z-20 cursor-pointer">
      <i
        id="currentLanguage"
        className="text-center bg-red-900 rounded-full p-5 border"
      >
        {
          <Image
            alt={currentLanguage + " flag"}
            src={`/imgs/flags/${currentLanguage}.svg`}
            width={25}
            height={25}
          />
        }
      </i>
      <ul className="absolute hidden opacity-0 bg-red-900 border  gap-2 rounded-xl top-14 right-14 w-32 group-hover:flex group-hover:opacity-100 cursor-pointer  duration-500 transition-opacity flex-col p-5">
        {routing.locales.map((loc, key) => {
          let selected;

          if (loc == currentLanguage) {
            selected = "bg-red-500";
          }

          console.log(loc, currentPath);

          return (
            <li
              key={key}
              className={"flex hover:bg-red-500 p-2 rounded-xl " + selected}
            >
              <Link href={`/${loc}/${currentPath}`} className="flex">
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
