import Card from "../../Card/Card";
import { dataInterface, GetLanguage } from "@/app/[locale]/types";
import Link from "next/link";

export default function News({ data }: { data: Array<dataInterface> }) {
  const { currentLanguage } = GetLanguage();

  const createArticle = data.map((data, key) => {
    const currentDate = new Date();
    const createdAt = new Date(data.createdAt);
    const timeDiff =
      currentDate.getMonth() == createdAt.getMonth() &&
      currentDate.getDate() - createdAt.getDate() < 7;

    if (timeDiff) {
      return (
        <Link
          href={`blog/article?title=${data.title[currentLanguage as keyof typeof data.title]}&thumbnail=${data.thumbnail}`}
          key={key}
        >
          <Card
            key={key}
            title={data.title[currentLanguage as keyof typeof data.title]}
            imagePath={data.thumbnail}
            imageAlt={data.thumbnailAlt}
            isReleased
          />
        </Link>
      );
    }
  });
  return (
    <div className="flex gap-10 w-full p-14 overflow-hidden">
      {createArticle}
    </div>
  );
}
