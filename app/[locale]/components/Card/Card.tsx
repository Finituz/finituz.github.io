import { useTranslations } from "next-intl";
import Table from "../Table/Table";
import Image, { StaticImageData } from "next/image";

export default function Card({
  title,
  imagePath,
  imageAlt,
  isReleased = false,
}: {
  title: string;
  imagePath: string | StaticImageData;
  imageAlt: string;
  isReleased?: boolean;
}) {
  const t = useTranslations("Card");

  return (
    <Table
      className="relative text-center overflow-hidden hover:scale-110 transition-all hover:shadow-neon duration-500 lg:w-[400px] md:w-82 w-72 h-96"
      showTitle
      title={title}
    >
      {!isReleased ? (
        <div className="absolute flex items-center justify-center bottom-10 left-5 bg-black w-[150%] h-10 rotate-[-45deg]">
          {t("text:coming_soon")}
        </div>
      ) : null}

      <Image
        src={imagePath}
        width={300}
        height={150}
        alt={imageAlt}
        className="w-full h-full rounded-md"
      />
    </Table>
  );
}
