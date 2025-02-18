"use client";
import { useEffect } from "react";
import Markdown from "react-markdown";
import ArticleIsland from "../../components/ArticleIsland/ArticleIsland";

export default function Article({
  content,
  thumbnail,
  path,
}: {
  content: string;
  thumbnail: string;
  path: string;
}) {
  useEffect(() => {
    const header = document.querySelector("#article-header") as HTMLHtmlElement;

    header.style.backgroundImage = `url(${thumbnail})`;
  });

  console.log(path);
  return (
    <main>
      <section className="flex flex-col text-justify overflow-scroll items-center justify-center gap-10">
        <header id="article-header" className="w-screen h-96"></header>
        <article className="w-1/2">
          <Markdown>
            {content.length > 0 ? content : "Article could not be found."}
          </Markdown>
        </article>
      </section>
      <ArticleIsland />
    </main>
  );
}
