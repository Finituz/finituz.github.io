"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import ArticleIsland from "../../components/ArticleIsland/ArticleIsland";

export default function Page() {
  const [content, setContent] = useState("");
  useEffect(() => {
    const header = document.querySelector("#article-header") as HTMLHtmlElement;
    const searchParams = { path: "", thumbnail: "" }; // test
    const path = searchParams?.path;
    const thumbnail = searchParams?.thumbnail;
    header.style.backgroundImage = `url(${thumbnail})`;
  });

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
