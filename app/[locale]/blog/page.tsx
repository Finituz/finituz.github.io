"use client";

import Lantern from "@/app/[locale]/components/Lantern/Lantern";
import { useTranslations } from "next-intl";

import GenArticles from "../components/blog/GenArticlesCards/GenArticlesCards";
import articlesData from "@/public/articles/data.json";
import HighLightsOfTheWeek from "../components/blog/HighLightsOfTheWeek/HighLightsOfTheWeek";
import News from "../components/blog/News/News";
import Manuals from "../components/blog/Manuals/Manuals";

export default function Home() {
  const t = useTranslations("Blog");

  return (
    <main className="flex min-h-screen w-full flex-col items-center px-8 justify-between">
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 h-fit text-center"
      >
        <h1 className="text-7xl">{t("title:hightlights-week")}</h1>
        <p className="text-justify px-5">{t("subtitle:hightlights-week")}</p>
        <HighLightsOfTheWeek articlesData={articlesData} />
        <Lantern className="top-56 left-0 -translate-x-1/2" />
        <div className="flex relative flex-col top-0 text-7xl animate-bounce">
          <span>v</span>
          <span className="absolute top-10">v</span>
        </div>
      </section>
      <section id="news">
        <h1 className="text-7xl mb-20">{t("title:news")}</h1>
        <p className="text-justify px-5 pb-10">{t("subtitle:news")}</p>
        <News articlesData={articlesData} />
        <Lantern className="bottom-56 right-0 -translate-x-1/2" />
      </section>
      <section id="manuals">
        <h1 className="text-7xl mb-20">{t("title:manuals")}</h1>
        <p className="text-justify px-5 pb-10">{t("subtitle:manuals")}</p>
        <Manuals articlesData={articlesData} />
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
