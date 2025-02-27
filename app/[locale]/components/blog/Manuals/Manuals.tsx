import Card from "../../Card/Card";
import { dataInterface } from "@/app/[locale]/config";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function News({
  articlesData,
}: {
  articlesData: Array<dataInterface>;
}) {
  const [currentLanguage, setCurrentLanguage] = useState("");

  useEffect(() => setCurrentLanguage(document.documentElement.lang), []);
  const createArticle = articlesData
    .filter((data) => data.tags.includes("manual"))
    .map((data, key) => {
      const currentDate = new Date();
      const createdAt = new Date(data.createdAt);
      const timeDiff =
        currentDate.getMonth() == createdAt.getMonth() &&
        currentDate.getDate() - createdAt.getDate() < 7;

      if (timeDiff) {
        return (
          <Link
            href={`blog/article?title=${data.title[currentLanguage as keyof typeof data.title]}&path=${data.path}-${currentLanguage}&thumbnail=${data.thumbnail}`}
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
