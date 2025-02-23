import Card from "../../Card/Card";
import { dataInterface } from "@/app/[locale]/config";
import Link from "next/link";

export default function News({
  articlesData,
}: {
  articlesData: Array<dataInterface>;
}) {
  return articlesData.map((data, key) => {
    const currentDate = new Date();
    const createdAt = new Date(data.createdAt);
    const timeDiff =
      currentDate.getMonth() == createdAt.getMonth() &&
      currentDate.getDate() - createdAt.getDate() < 7;

    if (timeDiff) {
      return (
        <Link
          href={`blog/article?title=${data.title}&path=${data.path}&thumbnail=${data.thumbnail}`}
          key={key}
        >
          <Card
            key={key}
            title={data.title}
            imagePath={data.thumbnail}
            imageAlt={data.thumbnailAlt}
            isReleased
          />
        </Link>
      );
    }
  });
}
