import Card from "../../Card/Card";
import { dataInterface } from "@/app/[locale]/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function News({ data }: { data: Array<dataInterface> }) {
  const { locale } = useParams<{ locale: string }>();

  const createArticle = data
    .filter((metadata) => String(metadata.tags.en).includes("manuals"))
    .map((metadata, key) => {
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
              metadata.thumbnailAlt[
                locale as keyof typeof metadata.thumbnailAlt
              ]
            }
            isReleased
          />
        </Link>
      );
    });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {createArticle}
    </div>
  );
}
