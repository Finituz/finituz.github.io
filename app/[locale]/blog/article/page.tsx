"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import ArticleIsland from "../../components/ArticleIsland/ArticleIsland";
import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

export default function Page() {
  const [content, setContent] = useState("");
  const router = useRouter();
  const path = router.query.path;
  const thumbnail = router.query.thumbnail;

  useEffect(() => {
    const header = document.querySelector("#article-header") as HTMLHtmlElement;
    header.style.backgroundImage = `url(${thumbnail})`;

    const result = async () => {
      await fetch(`${path}`)
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
