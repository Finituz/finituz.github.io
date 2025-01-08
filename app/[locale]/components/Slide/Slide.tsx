import { ReactNode, useEffect } from "react";

export default function Slide({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  let count: number = 0;

  const changeSlide = (goBack: boolean = false) => {
    const wrapper = document.getElementById(id) as HTMLDivElement;
    const wrapperChildren = wrapper.querySelectorAll("div.infotable");
    const wrapperSlideCounter = document.getElementById(
      `${id}-slide-counter`,
    ) as HTMLDivElement;

    const wrapperChildrenLength: number = wrapperChildren.length - 1;
    wrapperSlideCounter.innerHTML = "";

    count = count < 0 ? wrapperChildrenLength : count;

    wrapperChildren.forEach((child, index) => {
      if (count == index) {
        child.classList.remove("hidden");
        wrapperSlideCounter.innerHTML += "<b>ø</b>&nbsp;";
        return;
      }

      child.classList.add("hidden");
      wrapperSlideCounter.innerHTML += "o&nbsp;";
    });

    goBack ? count-- : count++;
    count = count > wrapperChildrenLength ? 0 : count;
  };

  setInterval(changeSlide, 10000);

  return (
    <div className="flex relative w-full">
      <button
        onClick={() => changeSlide(true)}
        className="absolute text-7xl md:hidden left-16 top-16 hover:scale-x-120 z-50"
      >
        {"<"}
      </button>
      <span
        id={id}
        className="flex gap-20 pl-7 text-justify items-center md:flex-col"
      >
        {children}
      </span>
      <button
        onClick={() => changeSlide()}
        className="absolute text-7xl md:hidden right-16 top-16 hover:scale-x-120 z-50"
      >
        {">"}
      </button>
      <div
        id={id + "-slide-counter"}
        className="absolute top-40 left-1/2 md:hidden transform -translate-x-1/2 z-50"
      ></div>
    </div>
  );
}
