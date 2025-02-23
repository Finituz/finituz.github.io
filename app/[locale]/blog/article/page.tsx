"use client";

import { useEffect, useState, Suspense } from "react"; // Import Suspense
import Markdown from "react-markdown";
import ArticleIsland from "../../components/blog/ArticleIsland/ArticleIsland";
import { useSearchParams } from "next/navigation";
import Lantern from "../../components/Lantern/Lantern";
import { useTranslations } from "next-intl";

function ArticleContent() {
  const searchParams = useSearchParams();
  const path = searchParams.get("path");
  const thumbnail = searchParams.get("thumbnail");

  const t = useTranslations("Blog");
  const [content, setContent] = useState("");

  useEffect(() => {
    const header = document.querySelector("#article-header") as HTMLElement;
    if (thumbnail) {
      header.style.backgroundImage = `url(${thumbnail})`;
    }

    if (path) {
      fetch(path)
        .then((res) => res.text())
        .then((res) => setContent(res))
        .catch(() => setContent(t("error:not-found")));
    }
  }, [path, thumbnail, t]);

  return (
    <main>
      <section className="flex flex-col text-justify overflow-scroll items-center justify-center gap-10">
        <header id="article-header" className="w-screen h-96"></header>
        <article className="w-full md:w-1/2">
          <Markdown>{content}</Markdown>
        </article>
        <Lantern className="top-56 left-0 -translate-x-1/2" />
      </section>
      <ArticleIsland />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ArticleContent />
    </Suspense>
  );
}
