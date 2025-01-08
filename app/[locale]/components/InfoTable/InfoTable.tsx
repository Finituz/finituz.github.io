import Image, { StaticImageData } from "next/image";
import Table from "../Table/Table";
import { ReactNode } from "react";

export default function InfoTable({
  children,
  reverse,
  iconSrc,
  iconAlt,
  iconWidth,
  href,
}: {
  children: ReactNode;
  reverse?: boolean;
  iconSrc: string | StaticImageData;
  iconAlt: string;
  iconWidth: number;
  href?: string;
}) {
  const reverseClass = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  return (
    <div
      className={
        `flex md:flex flex-col infotable z-10
          cursor-pointer w-[90vw] items-center
          lg:justify-between ` + reverseClass
      }
    >
      <a href={href} target="_blank">
        <Image
          className="lg:mb-0 mb-10 hover:scale-110 
                      transition-transform duration-300"
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
        />
      </a>
      <Table>{children}</Table>
    </div>
  );
}
