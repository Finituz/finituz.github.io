"use client";
import Article from "./article";

import { useSearchParams } from "next/navigation";
// export async function generateStaticParams(params: {
//   path: string;
//   thumbnail: string;
// }) {
//   const res = await fetch(params.path);
//   const content = await res.text().then((content) => content);
//
//   console.log("thumbnail: ", params.thumbnail);
//   console.log("path: ", params.path);
//   return { content: content, thumbnail: params.thumbnail, path: params.path };
// }

export default function Page() {
  // const { content, thumbnail, path } = await params;
  const searchParams = useSearchParams();

  return (
    <Article
      content=""
      thumbnail={searchParams.get("thumbnail") || ""}
      path={searchParams.get("path") || ""}
    />
  );
}
