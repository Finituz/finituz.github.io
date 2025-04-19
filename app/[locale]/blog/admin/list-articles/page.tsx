"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [articles, setArticles] = useState<Array<string>>([]);

  useEffect(() => {
    fetch("http://localhost:81/list-articles").then(async (list) => {
      const listArticles: Array<string> = await list.json();
      setArticles(listArticles);
    });
  }, []);

  const genList = articles.map((articleName, key) => {
    return <li key={key}>{articleName}</li>;
  });

  return (
    <section>
      <ul>{genList}</ul>
    </section>
  );
}
