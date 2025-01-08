"use client";

import { useEffect } from "react";

export default function GoUp() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const goUpButton = document.querySelector("#GoUp") as HTMLButtonElement;

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        goUpButton.classList.remove("opacity-0");
      } else {
        goUpButton.classList.add("opacity-0");
      }
    });
  });

  return (
    <button
      onClick={() => {
        scrollTo(0, 0);
      }}
      id="GoUp"
      className="opacity-0 z-20 transition-opacity duration-500 fixed bg-red-900
                  rotate-[-90deg] bottom-2 right-5  text-4xl p-2 rounded-lg border
                   border-white hover:shadow-neon"
    >
      {">"}
    </button>
  );
}
