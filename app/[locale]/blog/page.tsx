"use client";

import Lantern from "@/app/[locale]/components/Lantern/Lantern";
import Link from "next/link";
import Card from "../components/Card/Card";
import { useTranslations } from "next-intl";
import Slide from "../components/Slide/Slide";
import GenArticles from "../components/blog/GenArticlesCards/GenArticlesCards";
import articlesData from "./article/data.json";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen overflow-x-hidden w-full flex-col items-center justify-between">
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 h-screen"
      >
        <h1 className="text-7xl my-10 ">Destaques da semana!</h1>
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
        <div className="flex relative flex-col top-24 text-7xl animate-bounce">
          <span>v</span>
          <span className="absolute top-10">v</span>
        </div>
      </section>
      <section>
        <GenArticles data={articlesData} />
      </section>
    </main>
  );
}
