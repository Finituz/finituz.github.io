"use client";

import { useEffect, useState, Suspense } from "react"; // Import Suspense
import Markdown from "react-markdown";
import ArticleIsland from "../../components/blog/ArticleIsland/ArticleIsland";
import { useParams, useSearchParams } from "next/navigation";
import Lantern from "../../components/Lantern/Lantern";
import { useTranslations } from "next-intl";
import remarkGfm from "remark-gfm";
import remarkHTML from "remark-html";

function ArticleContent() {
  const searchParams = useSearchParams();
  const { locale } = useParams<{ locale: string }>();

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
      const filePath = `${path}/${path?.split("/")[2]}-${locale}.md`;

      fetch(filePath)
        .then((res) => res.text())
        .then((res) => setContent(res))
        .catch(() => setContent(t("error:not-found")));
    }
  }, [locale, path, thumbnail, t]);

  return (
    <main>
      <section className="flex flex-col text-left overflow-scroll items-center justify-center gap-10">
        <header id="article-header" className="w-screen h-96">
          <b
            onClick={() => window.history.back()}
            className=" absolute top-24 left-5 text-2xl cursor-pointer"
          >
            {"<"} {t("button::go-back")}
          </b>
        </header>
        <article id="remark" className="w-full p-8 lg:w-1/2">
          <Markdown remarkPlugins={[remarkGfm, remarkHTML]}>{content}</Markdown>
          <Lantern className="bottom-0 left-0 -translate-x-1/2" />
          <Lantern className="bottom-28 right-0 -translate-x-1/2" />
        </article>
        <Lantern className="top-72 left-0 -translate-x-1/2" />
      </section>
      <Lantern className="bottom-0 right-0 -translate-x-1/2" />
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
