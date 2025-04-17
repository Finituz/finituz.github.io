import Card from "@/app/[locale]/components/Card/Card";
import { RiSearchLine } from "react-icons/ri";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { dataInterface, GetLanguage } from "@/app/[locale]/config";

export default function GenArticles({ data }: { data: Array<dataInterface> }) {
  const [searchValue, setSearch] = useState("");
  const [filteredData, setFilter] = useState(data);
  const { currentLanguage } = GetLanguage();

  let tagsList: Array<string> = [];
  const t = useTranslations("Blog");

  data.forEach((metadata) => {
    if (!currentLanguage) return;

    metadata.tags[currentLanguage as keyof typeof metadata.tags]?.map(
      (tag: string) => tagsList.push(tag),
    );

    metadata.tags["common"]?.map((tag: string) => tagsList.push(tag));
  });

  const onSearch = (searchInput: string) => {
    setSearch(searchInput);

    const filteredItems = data.filter(
      (metadata) =>
        metadata.tags[currentLanguage as keyof typeof metadata.tags]?.some(
          (tag: string) => tag.includes(searchValue),
        ) ||
        metadata.tags["common"]?.some((tag: string) =>
          tag.includes(searchValue),
        ) ||
        metadata.title[currentLanguage as keyof typeof metadata.title].includes(
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
        href={`blog/article?title=${metadata.title[currentLanguage as keyof typeof metadata.title]}&path=${metadata.path}-${currentLanguage}&thumbnail=${metadata.thumbnail}`}
        key={key}
      >
        <Card
          key={key}
          title={metadata.title[currentLanguage as keyof typeof metadata.title]}
          imagePath={metadata.thumbnail}
          imageAlt={metadata.thumbnailAlt}
          isReleased
        />
      </Link>
    );
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
        <div className="flex bg-red-900 border-2 p-2 overflow-scroll rounded-xl w-full border-white gap-5 overflow-x">
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
