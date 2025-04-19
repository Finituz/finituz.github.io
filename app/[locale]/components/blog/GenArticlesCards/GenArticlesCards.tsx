import Card from "@/app/[locale]/components/Card/Card";
import { RiSearchLine } from "react-icons/ri";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { dataInterface } from "@/app/[locale]/types";
import { useParams } from "next/navigation";

export default function GenArticles({ data }: { data: Array<dataInterface> }) {
  const [searchValue, setSearch] = useState("");
  const [filteredData, setFilter] = useState(data);
  const { locale } = useParams<{ locale: string }>();

  let tagsList: Array<string> = [];
  const t = useTranslations("Blog");

  data.forEach((metadata) => {
    metadata.tags[locale as keyof typeof metadata.tags]?.map((tag: string) =>
      tagsList.push(tag),
    );
  });

  const onSearch = (searchInput: string) => {
    setSearch(searchInput);

    const filteredItems = data.filter(
      (metadata) =>
        metadata.tags[locale as keyof typeof metadata.tags]?.some(
          (tag: string) => tag.includes(searchValue),
        ) ||
        metadata.title[locale as keyof typeof metadata.title].includes(
          searchValue,
        ) ||
        searchInput == "",
    );

    setFilter(filteredItems);
  };

  const termNotFound = (): ReactElement => (
    <div className="text-center">
      <h1>Term could not be found!</h1>
    </div>
  );
  const createArticles = filteredData.map((metadata, key): ReactElement => {
    return (
      <Link
        href={`blog/article?path=${encodeURIComponent(metadata.path)}&thumbnail=${encodeURIComponent(metadata.thumbnailPath)}`}
        key={key}
      >
        <Card
          key={key}
          title={metadata.title[locale as keyof typeof metadata.title]}
          imagePath={metadata.thumbnailPath}
          imageAlt={
            metadata.thumbnailAlt[locale as keyof typeof metadata.thumbnailAlt]
          }
          isReleased
        />
      </Link>
    );
  });

  const createTags = tagsList.map((tag, key) => {
    if (tagsList.indexOf(tag) == key) {
      return (
        <div
          onClick={() => onSearch(tag)}
          title={tag}
          className="cursor-pointer whitespace-nowrap"
          key={key}
        >
          {tag}
        </div>
      );
    }
  });

  return (
    <>
      <div className="relative my-10 ">
        <RiSearchLine className="absolute top-1/2 transform -translate-y-1/2 left-2" />
        <input
          className="pl-10 bg-black border-2 border-white rounded-xl p-2"
          placeholder={t("placeholder:search")}
          value={searchValue}
          type="text"
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center my-10 items-center text-center md:w-1/2 px-2 w-full">
        <p className="text-5xl">{t("title:categories")}</p>
        <div className="flex bg-red-900 border-2 p-2 rounded-xl w-full border-white gap-5 overflow-x-scroll">
          {createTags}
        </div>
      </div>
      <div
        id="blog-articles"
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {filteredData.length > 0 ? createArticles : termNotFound()}
      </div>
    </>
  );
}
