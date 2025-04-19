import { ReactNode } from "react";

export default function Table({
  title,
  showTitle,
  className,
  floatHeader = false,
  children,
}: {
  title?: string;
  showTitle?: boolean;
  className?: string;
  floatHeader?: boolean;
  children: ReactNode;
}) {
  const headerClass = floatHeader
    ? "absolute rounded-xl z-50 top-2 border-2 bg-red-900 w-fit h-fit text-2xl"
    : "text-4xl w-full";

  return (
    <article
      className={
        `bg-red-900 relative flex flex-col cursor-pointer 
         items-center gap-10 p-5 rounded-lg border-2
         border-white ` + className
      }
    >
      {showTitle ? (
        <header className={"p-2 mb-5 " + headerClass} title={title}>
          <h1 className="break-words mb-1">{title}</h1>
          <hr className="border-2 border-white" />
        </header>
      ) : null}
      <div>{children} </div>
    </article>
  );
}
