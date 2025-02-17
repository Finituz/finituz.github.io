"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import ArticleIsland from "../../components/ArticleIsland/ArticleIsland";

export default function Page() {
  const params = useSearchParams();
  const [content, setContent] = useState("");
  const path: string = params.get("path") || "";
  const thumbnail = params.get("thumbnail");

  console.log("params: ", params);
  console.log("path: ", path);

  useEffect(() => {
    const header = document.querySelector("#article-header") as HTMLHtmlElement;

    header.style.backgroundImage = `url(${thumbnail})`;

    console.log("thumbnail: ", thumbnail);
    fetch(path)
      .then((content) => {
        if (content.ok) return content.text();
      })
      .then((content) => {
        setContent(content || "");
        console.log(content);
      });
  }, [path, thumbnail]);

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
