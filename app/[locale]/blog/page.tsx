"use client";

import Lantern from "@/app/[locale]/components/Lantern/Lantern";
import Link from "next/link";
import Card from "../components/Card/Card";
import { useTranslations } from "next-intl";
import Slide from "../components/Slide/Slide";
import GenArticles from "../components/blog/GenArticlesCards/GenArticlesCards";
import articlesData from "./article/data.json";

export default function Home() {
  const t = useTranslations("Blog");

  return (
    <main className="flex min-h-screen overflow-x-hidden w-full flex-col items-center justify-between">
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 h-screen text-center"
      >
        <h1 className="text-7xl my-10 ">{t("title:hightlights-week")}</h1>
        <Slide
          id="tecnologies-wrapper"
          className="w-full justify-center items-center"
        >
          {articlesData
            .filter((data) => (data.likes > 0 ? data : null))
            .map((data, key) => (
              <Link
                href={`blog/article?title=${data.title}&path=${data.path}&thumbnail=${data.thumbnail}`}
                key={key}
              >
                <Card
                  key={key}
                  title={data.title}
                  imagePath={data.thumbnail}
                  imageAlt={data.thumbnailAlt}
                  isReleased
                />
              </Link>
            ))}
        </Slide>
        <Lantern className="top-56 left-0 -translate-x-1/2" />
        <div className="flex relative flex-col top-24 text-7xl animate-bounce">
          <span>v</span>
          <span className="absolute top-10">v</span>
        </div>
      </section>
      <section id="highlight">
        <h1 className="text-7xl mb-20">{t("title:news")}</h1>
        {articlesData.map((data, key) => {
          const currentDate = new Date();
          const createdAt = new Date(data.createdAt);
          const timeDiff =
            currentDate.getMonth() == createdAt.getMonth() &&
            currentDate.getDate() - createdAt.getDate() < 7;

          if (timeDiff) {
            return (
              <Link
                href={`blog/article?title=${data.title}&path=${data.path}&thumbnail=${data.thumbnail}`}
                key={key}
              >
                <Card
                  key={key}
                  title={data.title}
                  imagePath={data.thumbnail}
                  imageAlt={data.thumbnailAlt}
                  isReleased
                />
              </Link>
            );
          }
        })}

        <Lantern className="bottom-56 right-0 -translate-x-1/2" />
      </section>
      <section>
        <GenArticles data={articlesData} />
        <Lantern className="top-56 left-0 -translate-x-1/2" />
      </section>
    </main>
  );
}
