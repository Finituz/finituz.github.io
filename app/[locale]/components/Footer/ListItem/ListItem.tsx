import { ReactNode } from "react";

export default function Listitem({
  children,
  url,
  target,
}: {
  children: ReactNode;
  url?: string;
  target?: string;
}) {
  return (
    <>
      <li>
        <a
          className="flex flex-row hover:scale-110 transition-transform duration-300 cursor-pointer gap-x-5 items-center"
          href={url}
          target={target}
        >
          {children}
        </a>
      </li>
    </>
  );
}
