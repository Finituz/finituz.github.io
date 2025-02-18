"use client";
import { useEffect, useState } from "react";
import Article from "./article";

import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic";

export default function Page() {
  // const { content, thumbnail, path } = await params;
  const [content, setContent] = useState("");
  const searchParams = useSearchParams();

  const path = searchParams.get("path") || "";
  const thumbnail = searchParams.get("thumbnail") || "";

  useEffect(() => {
    const result = async () => {
      await fetch(path)
        .then((res) => res.text())
        .then((res) => setContent(res));
    };

    result();
  });
  return <Article content={content} thumbnail={thumbnail} path={path} />;
}
