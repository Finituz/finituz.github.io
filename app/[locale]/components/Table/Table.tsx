import { ReactNode } from "react";

export default function Table({
  title,
  showTitle,
  className,
  children,
}: {
  title?: string;
  showTitle?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={
        "bg-red-900 flex flex-col items-center justify-center gap-10  w-[95vw] lg:w-4/5 p-5 rounded-lg border-2 border-white " +
        className
      }
    >
      {showTitle ? (
        <header className="w-full">
          <h1 className="text-5xl">{title}</h1>
          <hr className="border-2 border-white" />
        </header>
      ) : null}
      <div> {children} </div>
    </article>
  );
}
