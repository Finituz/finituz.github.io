import Card from "@/app/[locale]/components/Card/Card";
import { RiSearchLine } from "react-icons/ri";
import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { dataInterface } from "@/app/[locale]/config";

export default function GenArticles({ data }: { data: Array<dataInterface> }) {
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [searchValue, setSearch] = useState("");
  const [filteredData, setFilter] = useState(data);
  let tagsList: Array<string> = [];

  useEffect(() => setCurrentLanguage(document.documentElement.lang), []);

  const t = useTranslations("Blog");

  const onSearch = (searchInput: string) => {
    setSearch(searchInput);

    const filteredItems = data.filter(
      (metadata) =>
        metadata.tags.includes(searchValue) ||
        metadata.title["en"].includes(searchValue) ||
        searchInput == "",
    );

    setFilter(filteredItems);
  };

  const termNotFound = (): ReactElement => (
    <div className="text-center">
      <h1>Term could not be found!</h1>
    </div>
  );
  const createArticles = filteredData.map((data, key): ReactElement => {
    return (
      <Link
        href={`blog/article?title=${data.title[currentLanguage]}&path=${data.path}&thumbnail=${data.thumbnail}`}
        key={key}
      >
        <Card
          key={key}
          title={data.title[currentLanguage]}
          imagePath={data.thumbnail}
          imageAlt={data.thumbnailAlt}
          isReleased
        />
      </Link>
    );
  });

  data.map(({ tags }) => {
    tags.map((tag) => tagsList.push(tag));
  });

  const createTags = tagsList.map((tag, key) => {
    if (tagsList.indexOf(tag) == key) {
      return (
        <div onClick={() => onSearch(tag)} className="cursor-pointer" key={key}>
          {tag}
        </div>
      );
    }
  });

  return (
    <>
      <div className="relative my-10">
        <RiSearchLine className="absolute top-1/2 transform -translate-y-1/2 left-2" />
        <input
          className="pl-10 bg-black border-2 border-white rounded-xl p-2"
          placeholder={t("placeholder:search")}
          value={searchValue}
          type="text"
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center items-center text-center md:w-1/2 px-2 w-full">
        <p className="text-5xl">{t("title:categories")}</p>
        <div className="flex bg-red-900 border-2 p-2 rounded-xl w-full border-white gap-5 overflow-x">
          {createTags}
        </div>
      </div>
      <div
        id="blog-articles"
        className="grid p-10 justify-items-center place-items-center lg:grid-cols-4 grid-cols-1 md:grid-cols-3 grid-auto-flow gap-5 w-full"
      >
        {filteredData.length > 0 ? createArticles : termNotFound()}
      </div>
    </>
  );
}
