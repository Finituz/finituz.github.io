"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Markdown from "react-markdown";
import ArticleIsland from "../../components/ArticleIsland/ArticleIsland";

export const dynamic = "force-dynamic";

export default function Page() {
  // const { content, thumbnail, path } = await params;
  const [content, setContent] = useState("");
  const searchParams = useSearchParams();

  const path = searchParams.get("path") || "";
  const thumbnail = searchParams.get("thumbnail") || "";

  useEffect(() => {
    const header = document.querySelector("#article-header") as HTMLHtmlElement;
    header.style.backgroundImage = `url(${thumbnail})`;

    const result = async () => {
      await fetch(path)
        .then((res) => res.text())
        .then((res) => setContent(res));
    };

    result();
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
