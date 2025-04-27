"use client";

import { useEffect, useState } from "react";
import { dataInterface } from "../../types";
import { RiAddLine, RiDeleteBin4Line, RiPencilLine } from "react-icons/ri";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ARTICLES_URL } from "@/app/utils";

export default function Page() {
  const [articles, setArticles] = useState<Array<dataInterface>>();
  const [searchKey, setSearchKey] = useState<string>("");
  const { locale } = useParams<{ locale: string }>();

  const listArticles = async () => {
    await fetch(ARTICLES_URL, { method: "GET" }).then(async (list) => {
      const listArticles: Array<dataInterface> = await list.json();

      setArticles(listArticles);
    });
  };

  useEffect(() => {
    listArticles();
  }, []);

  const deleteArticle = async (uuid: string) => {
    await fetch(ARTICLES_URL.concat(`/${uuid}`), { method: "DELETE" }).then(
      async (deleted) => {
        if (deleted.ok) {
          listArticles();
          console.log(deleted);
        }
      },
    );
  };

  const genList = () => {
    if (!articles) {
      return <li>There is no articles available.</li>;
    }
    const filteredArticles = articles.filter((article) =>
      JSON.stringify(article).toLowerCase().includes(searchKey.toLowerCase()),
    );
    if (filteredArticles.length <= 0) {
      return <li>{`Can't find "${searchKey}" article.`}</li>;
    }

    return filteredArticles.map((article, key) => {
      const title = article.title[locale as keyof typeof article.title];

      return (
        <li
          className={`flex bg-red-900 hover:shadow-neon cursor-pointer
                      hover:scale-105 transition-all duration-500 justify-between
                      rounded-xl border p-5 text-center`}
          key={key}
          title={title}
        >
          <div className="w-[80%] break-words">
            {title.length > 25 ? title.slice(0, 25).concat("...") : title}
          </div>
          <div className="flex gap-5">
            <Link
              href={{
                pathname: `/blog/admin/article`,
                query: { editMode: true, uuid: article.uuid },
              }}
            >
              <RiPencilLine />
            </Link>
            <RiDeleteBin4Line onClick={() => deleteArticle(article.uuid)} />
          </div>
        </li>
      );
    });
  };

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <h1 className="absolute top-32  left-10 text-5xl">Admin&apos;s page.</h1>
      <label className="flex flex-col w-1/3 gap-5">
        <span className="flex justify-between">
          <b className="text-3xl">Articles</b>
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            className="p-2 rounded-xl bg-transparent border"
            placeholder="Search article..."
          />
          <Link href={"/blog/admin/article"}>
            <RiAddLine className="text-5xl border hover:shadow-neon duration-500 transition-all hover:scale-105 cursor-pointer bg-red-900 rounded-xl" />
          </Link>
        </span>
        <hr />
        <ul className="flex flex-col gap-2">{genList()}</ul>
      </label>
    </section>
  );
}
