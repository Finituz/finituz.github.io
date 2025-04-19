"use client";

import { ReactTyped } from "react-typed";
import Image from "next/image";
import { RiChromeFill, RiInformationFill } from "react-icons/ri";

import Table from "./components/Table/Table";
import InfoTable from "./components/InfoTable/InfoTable";
import Card from "./components/Card/Card";
import Lantern from "./components/Lantern/Lantern";

import github from "@/public/imgs/github.svg";

import godot from "@/public/imgs/tech-we-use/godot.svg";
import pixelorama from "@/public/imgs/tech-we-use/pixolorama.ico";
import blender from "@/public/imgs/tech-we-use/blender.svg";
import gimp from "@/public/imgs/tech-we-use/gimp.svg";

import rossoImage from "@/public/imgs/games/3xrosso.png";
import extensionImage from "@/public/imgs/extension.png";

import douglas from "@/public/imgs/team/douglas_guimaraes.png";
import Slide from "./components/Slide/Slide";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen overflow-x-hidden w-full flex-col items-center justify-between">
      <section
        id="home"
        className="flex flex-col items-center justify-center gap-10 h-screen"
      >
        <Lantern className="top-0 left-1/2 -translate-x-1/2" />
        <h1 className="flex flex-col text-7xl text-center h-72 lg:flex-row mt-24">
          {t("HomePage.title")}&nbsp;
          <ReactTyped
            strings={Array.from(t("HomePage.typed").split(";"))}
            typeSpeed={100}
            loop
            backSpeed={20}
            showCursor
          />
        </h1>
        <div className="flex relative flex-col text-7xl animate-bounce">
          <span>v</span>
          <span className="absolute top-10">v</span>
        </div>
      </section>
      <section id="github">
        <Table showTitle title={t("GitHub.title:github")}>
          <article>
            <p>{t("GitHub.paragraph:1")}</p>
            <p>
              {t.rich("GitHub.paragraph:2", {
                ul: (chunks) => (
                  <ul className="list-disc ml-20 my-5">{chunks}</ul>
                ),
                li: (chunks) => <li>{chunks}</li>,
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
            <p>{t("GitHub.paragraph:3")}</p>
            <a
              href="https://github.com/Finituz?tab=repositories"
              target="_blank"
              className="flex flex-col cursor-pointer hover:scale-110 transition-transform duration-500 justify-center items-center gap-5  my-10 w-full"
            >
              <Image src={github} alt="" width={150} />
              <strong className="text-5xl">{t("GitHub.link:join_us")}</strong>
            </a>
          </article>
        </Table>
      </section>
      <section id="techs-we-use" className="gap-10 md:px-10">
        <Lantern className="bottom-0 right-0" />
        <Lantern className="top-50 left-1/2 transform -translate-x-1/2" />
        <Lantern className="top-32 left-0 transform -translate-x-1/2" />
        <h1 className="text-4xl text-center md:w-full w-4/5">
          {t("Techs.title:techs:1")}&#8287;
          <span className="relative">
            {t("Techs.title:techs:2")}
            <small className="absolute left-0 w-40 -bottom-4 text-red-600 text-sm ">
              {t("Techs.title:techs:3")}
            </small>
          </span>
          &#8287;{t("Techs.title:techs:4")}
        </h1>
        <Table className="lg:w-fit">
          <div className="flex gap-5 md:w-fit">
            <RiInformationFill className="text-4xl animate-pulse text-orange-400 duration-500" />
            {t("Techs.tip")}
          </div>
        </Table>
        <Slide
          id="tecnologies-wrapper"
          buttonLeftClass="left-16 top-10 transform"
          buttonRightClass="right-16 top-10 transform"
          className="md:flex-col md:gap-10"
        >
          <InfoTable
            iconSrc={godot}
            href="https://godotengine.org/"
            iconAlt="A blue robot with detail ."
            iconWidth={150}
          >
            <div>{t("Techs.godot:paragraph")}</div>
          </InfoTable>
          <InfoTable
            iconSrc={pixelorama}
            href="https://orama-interactive.itch.io/pixelorama"
            reverse
            iconAlt="Pixolorama's logo, an square with 3 colors blue ate left, light green at center and light red at right, with a bege square at the center with another dark red square at it center, representing an eye ."
            iconWidth={150}
          >
            <div>{t("Techs.pixelorama:paragraph")}</div>
          </InfoTable>
          <InfoTable
            href="https://www.blender.org/"
            iconSrc={blender}
            iconAlt="A blue robot."
            iconWidth={150}
          >
            <div>{t("Techs.blender:paragraph")}</div>
          </InfoTable>
          <InfoTable
            iconSrc={gimp}
            href="https://www.gimp.org/"
            reverse
            iconAlt="GIMP's mascot - Wilber"
            iconWidth={150}
          >
            <div>{t("Techs.gimp:paragraph")}</div>
          </InfoTable>
        </Slide>
      </section>
      <section id="games">
        <h1 className="text-7xl my-10">{t("Games.title:games")}</h1>
        <div className="">
          <Card title="3XRosso" imagePath={rossoImage} imageAlt="" />
        </div>
      </section>
      <section id="extension">
        <h1 className="text-7xl text-center">
          {t("Extension.title:extension")}
        </h1>
        <h2>{t("Extension.subtitle:extension")}</h2>
        <article
          className="flex flex-col-reverse lg:flex-row mt-20
          justify-between items-center w-full h-full lg:py-36 lg:px-72"
        >
          <div className="w-3/4 md:w-2/5 text-justify">
            <p>{t("Extension.paragraph")}</p>
          </div>
          <a target="_blank">
            <Image
              src={extensionImage}
              className="extension-image rounded-lg border-2 border-white mb-5"
              alt="Wishlist extension print."
              width={500}
            />
            <b className="flex gap-2 w-full justify-center items-center mb-20">
              {t.rich("Extension.callToAction", {
                icon: () => <RiChromeFill />,
              })}
            </b>
          </a>
        </article>
        <Lantern className="left-0 bottom-5" />
      </section>
      {/* <section id="newsLetter"> */}
      {/*   <Table */}
      {/*     className="md:w-2/4" */}
      {/*     showTitle */}
      {/*     title="Subscribe to our news letter!" */}
      {/*   > */}
      {/*     <div className="flex flex-col gap-5 w-full "> */}
      {/*       <article> */}
      {/*         <p> */}
      {/*           The Finituz Newsletter is a key communication tool for our game */}
      {/*           studio, offering exclusive updates and insights to our dedicated */}
      {/*           community. */}
      {/*         </p> */}
      {/*       </article> */}
      {/*       <NewsLetter /> */}
      {/*       <Lantern className="bottom-0 left-1/2 translate-x-1/2" /> */}
      {/*     </div> */}
      {/*   </Table> */}
      {/* </section> */}
      <section id="about-us">
        <Table showTitle title={t("About_us.title:about_us")}>
          <div>
            <article>
              <p className="mb-4">{t("About_us.paragraph:1")}</p>
              <p className="text-xl font-semibold mb-4">
                {t("About_us.subtitle:2")}
              </p>
              <p>{t("About_us.paragraph:2")}</p>
              <p className="mb-4">{t("About_us.paragraph:3")}</p>
              <p className="text-xl font-semibold mb-4">
                {t("About_us.subtitle:4")}
              </p>
              <p className="mb-4">{t("About_us.paragraph:4")}</p>
              <p>{t("About_us.paragraph:5")}</p>
              <p className="mt-8">- {t("About_us.author_name")}</p>
            </article>
            <div className="text-center mt-10">
              <h2 className="text-4xl mb-5">
                {t.rich("About_us.title:team", {
                  b: (chunks) => <b className="text-red-600">{chunks}</b>,
                })}
              </h2>
              <div className="flex flex-row justify-center items-center">
                <label className="flex flex-col justify-center items-center">
                  <Image
                    src={douglas}
                    alt="Photo of the game studio Founder"
                    width={100}
                    className="border-4 border-white rounded-full"
                  />
                  <span lang="pt-br">{t("About_us.author_name")}</span>
                  <small className="text-zinc-300">
                    {t("About_us.douglas:team_role")}
                  </small>
                </label>
              </div>
            </div>
          </div>
        </Table>
      </section>
    </main>
  );
}
