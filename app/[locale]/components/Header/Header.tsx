"use client";

import Image from "next/image";
import {
  RiGamepadLine,
  RiBuilding4Line,
  RiMenu5Line,
  RiAddCircleLine,
  RiNewsLine,
} from "react-icons/ri";

import Logo from "@/public/logo.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const [isBlog, setIsBlog] = useState(false);

  const menuClicked = () => {
    const list = document.getElementById("menu-list") as HTMLUListElement;
    const overlay = document.getElementById("mobile-overlay") as HTMLDivElement;

    list.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  };

  const gamesSiteLink = () => (
    <a href="/" className="flex items-center gap-2">
      <RiGamepadLine />
      {t("game_site")}
    </a>
  );

  const blogSiteLink = () => (
    <Link href="/blog" className="flex items-center gap-2">
      <RiNewsLine /> {t("blog")}
    </Link>
  );

  const gamesSiteLogo = () => (
    <a href="/#home" className="flex gap-2 justify-center items-center">
      <Image src={Logo} width={32} height={32} alt="Finituz's logo" />
      <strong>Finituz </strong>
    </a>
  );

  const blogSiteLogo = () => (
    <Link
      href={`/blog#home`}
      className="flex gap-2 justify-center items-center"
    >
      <Image src={Logo} width={32} height={32} alt="Finituz's logo" />
      <strong>Finituz {t("blog")}</strong>
    </Link>
  );

  useEffect(() => {
    setIsBlog(window.location.href.includes("blog"));
    console.log(window.location.href.includes("blog"));
  }, []);

  return (
    <>
      <header className="absolute z-[15] bg-red-900 flex justify-between top-2 left-2 right-2 h-fit p-2 rounded-xl border border-white">
        {isBlog ? blogSiteLogo() : gamesSiteLogo()}
        <RiMenu5Line
          onClick={() => menuClicked()}
          className="text-2xl md:hidden hover:scale-105 cursor-pointer"
        />
        <ul
          id="menu-list"
          className="hidden absolute md:flex md:static right-5 top-12 bg-red-900 border
                        border-white p-2 md:border-none md:visible gap-5 rounded-xl"
          onClick={() => menuClicked()}
        >
          <li>{isBlog ? gamesSiteLink() : blogSiteLink()}</li>
          {isBlog ? null : (
            <li>
              <a href="/#games" className="flex items-center gap-2">
                <RiGamepadLine /> {t("our_games")}
              </a>
            </li>
          )}

          <li>
            <a href="/#about-us" className="flex items-center gap-2">
              <RiBuilding4Line />
              {t("about_us")}
            </a>
          </li>
          <li className="md:hidden">
            <a href="/#extension" className="flex items-center gap-2">
              <RiAddCircleLine />
              {t("extension")}
            </a>
          </li>
        </ul>
      </header>
      <div
        id="mobile-overlay"
        onClick={() => menuClicked()}
        className="hidden fixed z-10 top-0 left-0 right-0 bottom-0"
      ></div>
    </>
  );
}
