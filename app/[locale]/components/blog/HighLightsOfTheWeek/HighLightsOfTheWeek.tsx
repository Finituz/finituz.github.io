import Slide from "../../Slide/Slide";
import Card from "../../Card/Card";
import { dataInterface } from "@/app/[locale]/config";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HighLightsOfTheWeek({
  articlesData,
}: {
  articlesData: Array<dataInterface>;
}) {
  const [currentLanguage, setCurrentLanguage] = useState("");

  useEffect(() => setCurrentLanguage(document.documentElement.lang), []);
  return (
    <Slide
      id="hightlights-wrapper"
      buttonLeftClass="left-8 top-1/2 transform -translate-y-1/2"
      buttonRightClass="right-8 top-1/2 transform -translate-y-1/2"
    >
      {articlesData
        .filter((data) => (data.likes == 0 ? data : null))
        .map((data, key) => (
          <Link
            className="flex items-center justify-center"
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
        ))}
    </Slide>
  );
}
