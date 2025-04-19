import Card from "../../Card/Card";
import { dataInterface, GetLanguage } from "@/app/[locale]/config";
import Link from "next/link";

export default function News({ data }: { data: Array<dataInterface> }) {
  const { currentLanguage } = GetLanguage();

  const createArticle = data
    .filter((metadata) => metadata.manual)
    .map((metadata, key) => {
      return (
        <Link
          href={`blog/article?title=${metadata.title[currentLanguage as keyof typeof metadata.title]}&thumbnail=${metadata.thumbnail}`}
          key={key}
        >
          <Card
            key={key}
            title={
              metadata.title[currentLanguage as keyof typeof metadata.title]
            }
            imagePath={metadata.thumbnail}
            imageAlt={metadata.thumbnailAlt}
            isReleased
          />
        </Link>
      );
    });
  return (
    <div className="flex justify-center items-center gap-10 w-full p-14 overflow-hidden">
      {createArticle}
    </div>
  );
}
