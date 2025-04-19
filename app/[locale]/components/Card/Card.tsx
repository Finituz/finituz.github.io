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
      className={`relative flex items-center justify-center text-center
                  overflow-hidden hover:scale-110 transition-all 
                  hover:shadow-neon duration-500 lg:w-[400] w-[350px] h-96`}
      showTitle
      floatHeader
      title={title}
    >
      {!isReleased ? (
        <div
          className={`absolute flex items-center justify-center bottom-10
                      left-5 bg-black w-[150%] h-10 rotate-[-45deg]`}
        >
          {t("text:coming_soon")}
        </div>
      ) : null}

      <Image src={imagePath} fill alt={imageAlt} className="rounded-md" />
    </Table>
  );
}
