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
    <main className="flex min-h-screen overflow-x-hidden w-full flex-col items-center justify-between">
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 h-screen text-center"
      >
        <h1 className="text-7xl my-10 ">{t("title:hightlights-week")}</h1>
        <HighLightsOfTheWeek articlesData={articlesData} />
        <Lantern className="top-56 left-0 -translate-x-1/2" />
        <div className="flex relative flex-col top-24 text-7xl animate-bounce">
          <span>v</span>
          <span className="absolute top-10">v</span>
        </div>
      </section>
      <section></section>
      <section id="highlight">
        <h1 className="text-7xl mb-20">{t("title:news")}</h1>
        <News articlesData={articlesData} />
        <Lantern className="bottom-56 right-0 -translate-x-1/2" />
      </section>
      <section>
        <GenArticles data={articlesData} />
        <Lantern className="top-56 left-0 -translate-x-1/2" />
      </section>
    </main>
  );
}
