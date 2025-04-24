import Slide from "../../Slide/Slide";
import Card from "../../Card/Card";
import { dataInterface } from "@/app/[locale]/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HighLightsOfTheWeek({
  data,
}: {
  data: Array<dataInterface>;
}) {
  const { locale } = useParams<{ locale: string }>();

  const cards = data.map((metadata, key) => {
    if (key > 2) return;

    const isMiddleCard = key == 1 ? "md:scale-110 md:z-10" : null;

    return (
      <Link
        className={`flex md:flex items-center justify-center ${isMiddleCard}`}
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

  return (
    <Slide
      id="hightlights-wrapper"
      className="md:-gap-x-10"
      buttonLeftClass="left-8 top-1/2 transform -translate-y-1/2"
      buttonRightClass="right-8 top-1/2 transform -translate-y-1/2"
    >
      {cards}
    </Slide>
  );
}
