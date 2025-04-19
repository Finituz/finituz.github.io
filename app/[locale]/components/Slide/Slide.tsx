"use client";
import { ReactNode, useEffect, useRef } from "react";

export default function Slide({
  children,
  id,
  className,
  buttonRightClass = "right-16 top-1/2 transform -translate-y-1/2",
  buttonLeftClass = "left-16 top-1/2 transform -translate-y-1/2",
}: {
  children: ReactNode;
  id: string;
  className?: string;
  buttonRightClass?: string;
  buttonLeftClass?: string;
}) {
  let count: number = 0;

  const wrapper = useRef<HTMLSpanElement>(null);
  const wrapperSlideCounter = useRef<HTMLDivElement>(null);

  const setWrapperSlideCounter = () => {
    if (!wrapper.current || !wrapperSlideCounter.current) return;
    const slideCounter = wrapperSlideCounter.current;

    const wrapperChildren = wrapper.current.childNodes;
    slideCounter.innerHTML = "";

    wrapperChildren.forEach((child: ChildNode, index: number) =>
      count == index
        ? (slideCounter.innerHTML += "<b>ø</b>&nbsp;")
        : (slideCounter.innerHTML += "o&nbsp;"),
    );
  };

  const changeSlide = (goBack: boolean = false) => {
    if (!wrapper.current || !wrapperSlideCounter.current) return;

    const wrapperChildren = wrapper.current.querySelectorAll(":scope > *");
    const wrapperChildrenLength: number = wrapperChildren.length - 1;

    count = count < 0 ? wrapperChildrenLength : count;

    wrapperChildren.forEach((child, index: number) => {
      child.classList.add("transition-all", "duration-500");

      count == index
        ? child.classList.remove("hidden")
        : child.classList.add("hidden");

      setWrapperSlideCounter();
    });

    goBack ? count-- : count++;

    count = count > wrapperChildrenLength ? 0 : count;
  };

  useEffect(() => {
    const changeSlideInterval = setInterval(() => {
      changeSlide();
    }, 5000);

    changeSlide();
    return () => clearInterval(changeSlideInterval);
  });

  return (
    <div className="flex relative items-center justify-center w-screen">
      <button
        onClick={() => changeSlide(true)}
        className={
          "absolute text-7xl md:hidden hover:scale-x-120 bg-red-900 rounded-xl border p-2 z-10 " +
          buttonLeftClass
        }
      >
        {"<"}
      </button>
      <span
        id={id}
        ref={wrapper}
        className={"flex text-justify items-center justify-center " + className}
      >
        {children}
      </span>
      <button
        onClick={() => changeSlide()}
        className={
          "absolute text-7xl md:hidden bg-red-900 rounded-xl border p-2 hover:scale-x-120 z-10 " +
          buttonRightClass
        }
      >
        {">"}
      </button>
      <div
        id={id + "-slide-counter"}
        ref={wrapperSlideCounter}
        className="absolute -bottom-10 left-1/2 md:hidden transform -translate-x-1/2 z-50"
      ></div>
    </div>
  );
}
