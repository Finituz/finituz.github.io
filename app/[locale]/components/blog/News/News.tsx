import Card from "../../Card/Card";
import { dataInterface } from "@/app/[locale]/types";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function News({ data }: { data: Array<dataInterface> }) {
  const { locale } = useParams<{ locale: string }>();
  const createArticle = data.map((metadata, key) => {
    const currentDate = new Date();
    const createdAt = new Date(metadata.createdAt);
    const timeDiff =
      currentDate.getMonth() == createdAt.getMonth() &&
      currentDate.getDate() - createdAt.getDate() < 7;

    if (timeDiff) {
      return (
        <Link
          href={`blog/article?title=${encodeURIComponent(metadata.path)}&thumbnail=${encodeURIComponent(metadata.thumbnailPath)}`}
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
    }
  });
  return (
    <div className="flex gap-10 w-full p-14 overflow-hidden">
      {createArticle}
    </div>
  );
}
