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

  const cards = data.map((metadata, key) => (
    <Link
      className="flex items-center justify-center"
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
  ));

  return (
    <Slide
      id="hightlights-wrapper"
      buttonLeftClass="left-8 top-1/2 transform -translate-y-1/2"
      buttonRightClass="right-8 top-1/2 transform -translate-y-1/2"
    >
      {cards}
    </Slide>
  );
}
