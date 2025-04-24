"use client";

import { useState, Suspense, MouseEvent, FormEvent, ChangeEvent } from "react"; // Import Suspense
import Markdown from "react-markdown";
import Lantern from "../../../components/Lantern/Lantern";
import { useTranslations } from "next-intl";
import remarkGfm from "remark-gfm";
import remarkHTML from "remark-html";

function ArticleContent() {
  const [content, setContent] = useState(() => {
    if (typeof window != "undefined") {
      return localStorage.getItem("new-article-tmp") ?? "# Hello, world!";
    } else return "# Hello, world!";
  });

  const [filename, setFilename] = useState("untitled");

  const exportAsFile = (e: MouseEvent<HTMLButtonElement>) => {
    const mdContent = e.currentTarget.value;
    const md = new File([mdContent], `${filename}.md`);

    const a = document.createElement("a");

    a.href = URL.createObjectURL(md);
    a.download = `${filename}.md`;
    a.click();

    const removeAnchor = setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
      clearTimeout(removeAnchor);
    }, 500);
  };

  const sendToBlog = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const file = new File([content], filename, { type: "text/markdown" });

    data.append("md", file);

    try {
      const res = await fetch("http://localhost:81/articles", {
        method: "POST",
        body: data,
      });

      const responseText = await res.text();
      console.log("Response:", responseText);
    } catch (err) {
      console.error("Upload failed:", err);
    }
  };

  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!e.currentTarget.value) {
      localStorage.removeItem("new-article-tmp");
      setContent("");
      return;
    }

    setContent((prevContent) => {
      if (prevContent != e.target.value) {
        localStorage.setItem("new-article-tmp", content);
      }

      return e.target.value;
    });
  };

  return (
    <main className="w-full">
      <section className="flex flex-col text-left w-full overflow-scroll items-center justify-center gap-10">
        <article id="remark" className="w-full h-full p-8">
          <div className="flex gap-10 w-full">
            <form
              onSubmit={sendToBlog}
              className="flex flex-col justify-center items-center w-full gap-10"
            >
              <label className="flex flex-col self-start w-full">
                Title:
                <input
                  value={filename}
                  required
                  onChange={(e) => setFilename(e.target.value)}
                  className="rounded-xl w-full text-black p-2"
                  placeholder="Put title here...."
                />
              </label>
              <label className="flex flex-col self-start w-full">
                Thumbnail:
                <input type="file" required name="thumbnail" accept="image/*" />
              </label>
              <label className="flex flex-col self-start w-full">
                Thumbnail alt:
                <input
                  required
                  name="thumbnailAlt"
                  className="rounded-xl w-full text-black p-2"
                  placeholder="Describe the image..."
                />
              </label>
              <label className="w-full">
                Content:
                <textarea
                  required
                  value={content}
                  placeholder="Type something new..."
                  className="text-black h-96 w-full rounded-xl p-2"
                  onChange={onContentChanged}
                />
              </label>
              <label className="w-full">
                Tags:
                <input
                  required
                  name="tags"
                  className="rounded-xl w-full text-black p-2"
                  placeholder="Put tags separate by comma here...."
                />
              </label>
              <fieldset className="flex gap-5">
                <button
                  onClick={exportAsFile}
                  type="submit"
                  className="border rounded-xl p-2 hover:shadow-neon transition-shadow duration-500"
                >
                  export as file
                </button>
                <button
                  type="submit"
                  className="border hover:shadow-neon rounded-xl p-2 transition-shadow duration-500"
                >
                  send to blog
                </button>
              </fieldset>
            </form>
            <label className="w-full h-full">
              Preview:
              <Markdown
                className="w-full h-screen overflow-y-scroll"
                remarkPlugins={[remarkGfm, remarkHTML]}
              >
                {content}
              </Markdown>
            </label>
          </div>
          <Lantern className="bottom-0 left-0 -translate-x-1/2" />
          <Lantern className="bottom-28 right-0 -translate-x-1/2" />
        </article>
        <Lantern className="top-72 left-0 -translate-x-1/2" />
      </section>
      <Lantern className="bottom-0 right-0 -translate-x-1/2" />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ArticleContent />
    </Suspense>
  );
}
