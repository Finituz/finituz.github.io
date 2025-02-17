import Card from "@/app/[locale]/components/Card/Card";
import { RiSearchLine } from "react-icons/ri";
import {
  ChangeEventHandler,
  ReactElement,
  use,
  useEffect,
  useState,
} from "react";
import Link from "next/link";

interface dataInterface {
  title: string;
  path: string;
  thumbnail: string;
  thumbnailAlt: string;
  tags: Array<string>;
}
export default function GenArticles({ data }: { data: Array<dataInterface> }) {
  const [searchValue, setSearch] = useState("");
  const [filteredData, setFilter] = useState(data);

  const onSearch = (event: ChangeEventHandler) => {
    let searchInput: string = event.target.value;

    setSearch(searchInput);

    const filteredItems = data.filter(
      (metadata) =>
        metadata.tags.includes(searchValue) ||
        metadata.title.includes(searchValue),
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
        href={`blog/article?title=${data.title}&path=${data.path}&thumbnail=${data.thumbnail}`}
        key={key}
      >
        <Card
          key={key}
          title={data.title}
          imagePath={"/en" + data.thumbnail}
          imageAlt={data.thumbnailAlt}
          isReleased
        />
      </Link>
    );
  });

  return (
    <>
      <div className="relative my-10">
        <RiSearchLine className="absolute top-1/2 transform -translate-y-1/2 left-2" />
        <input
          className="pl-10 bg-black border-2 border-white rounded-xl p-2"
          placeholder="search..."
          value={searchValue}
          type="text"
          onChange={onSearch}
        />
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
