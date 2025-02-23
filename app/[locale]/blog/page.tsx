"use client";

import Lantern from "@/app/[locale]/components/Lantern/Lantern";
import { useTranslations } from "next-intl";

import GenArticles from "../components/blog/GenArticlesCards/GenArticlesCards";
import articlesData from "./article/data.json";
import HighLightsOfTheWeek from "../components/blog/HighLightsOfTheWeek/HighLightsOfTheWeek";
import News from "../components/blog/News/News";

export default function Home() {
  const t = useTranslations("Blog");

  return (
    <main className="flex min-h-screen overflow-x-hidden w-full flex-col items-center justify-between mt-20">
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 h-screen text-center"
      >
        <h1 className="text-7xl mt-32">{t("title:hightlights-week")}</h1>
        <p className="text-justify px-5">{t("subtitle:hightlights-week")}</p>
        <HighLightsOfTheWeek articlesData={articlesData} />
        <Lantern className="top-56 left-0 -translate-x-1/2" />
        <div className="flex relative flex-col top-0 text-7xl animate-bounce">
          <span>v</span>
          <span className="absolute top-10">v</span>
        </div>
      </section>
      <section></section>
      <section id="highlight">
        <h1 className="text-7xl mb-20">{t("title:news")}</h1>
        <p className="text-justify px-5">{t("subtitle:news")}</p>
        <News articlesData={articlesData} />
        <Lantern className="bottom-56 right-0 -translate-x-1/2" />
      </section>
      <section>
        <h1 className="text-7xl mb-20">{t("title:explore")}</h1>
        <p className="text-justify px-5">{t("subtitle:explore")}</p>
        <GenArticles data={articlesData} />
        <Lantern className="top-56 left-0 -translate-x-1/2" />
      </section>
    </main>
  );
}
