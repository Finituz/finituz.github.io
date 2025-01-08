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
            <p>{t("GitHub.paragraph:2")}</p>
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
          Technologies that we&#8287;
          <span className="relative">
            hate
            <small className="absolute left-0 w-40 -bottom-4 text-red-600 text-sm ">
              ~ just kidding :P
            </small>
          </span>
          &#8287; to use!
        </h1>

        <Table className="lg:w-fit">
          <div className="flex gap-5 md:w-fit">
            <RiInformationFill className="text-4xl animate-pulse text-orange-400 duration-500" />
            Tip: click on their icon and support those awesome projects too!!!
          </div>
        </Table>
        <Slide id="tecnologies-wrapper">
          <InfoTable
            iconSrc={godot}
            href="https://godotengine.org/"
            iconAlt="A blue robot with detail ."
            iconWidth={150}
          >
            <div>
              Godot is an open-source game engine for 2D and 3D game
              development. It features a node-based scene system, supports
              GDScript, VisualScript, and C#, and allows cross-platform exports
              to various devices. With a visual editor, strong 2D and 3D tools,
              and extensibility through plugins, Godot is known for its
              flexibility, performance, and active community. It&apos;s free to
              use with no royalties.
            </div>
          </InfoTable>
          <InfoTable
            iconSrc={pixelorama}
            href="https://orama-interactive.itch.io/pixelorama"
            reverse
            iconAlt="Pixolorama's logo, an square with 3 colors blue ate left, light green at center and light red at right, with a bege square at the center with another dark red square at it center, representing an eye ."
            iconWidth={150}
          >
            <div>
              Pixolorama is an open-source 2D game engine optimized for pixel
              art games. It features a user-friendly visual editor, supports
              scripting with GDScript, and allows for cross-platform exports.
              Designed for simplicity and accessibility, it is ideal for indie
              developers working on pixel-based games.
            </div>
          </InfoTable>
          <InfoTable
            href="https://www.blender.org/"
            iconSrc={blender}
            iconAlt="A blue robot."
            iconWidth={150}
          >
            <div>
              Blender is a free, open-source 3D creation suite that offers
              powerful tools for modeling, animation, rendering, sculpting,
              texturing, and video editing. It includes advanced features for
              simulations and scripting, and is available on Linux, macOS, and
              Windows. Blender is renowned for its versatility and strong
              community support.
            </div>
          </InfoTable>
          <InfoTable
            iconSrc={gimp}
            href="https://www.gimp.org/"
            reverse
            iconAlt="GIMP's mascot - Wilber"
            iconWidth={150}
          >
            <div>
              GIMP, which stands for GNU Image Manipulation Program, is a free
              and open-source graphics editor used for tasks such as photo
              retouching, image composition, and image authoring. It&asp;s often
              compared to Adobe Photoshop due to its similar capabilities,
              including layers, filters, and various editing tools. GIMP
              supports a wide range of file formats and is popular among both
              amateur and professional graphic designers for its powerful
              features and customizability.
            </div>
          </InfoTable>
        </Slide>
      </section>
      <section id="games">
        <h1 className="text-7xl my-10">Our games!</h1>
        <div className="">
          <Card title="3XRosso" imagePath={rossoImage} imageAlt="" />
        </div>
      </section>
      <section id="extension">
        <h1 className="text-7xl text-center">Search for game discounts?</h1>
        <h2> Add our discount wishlist extension!</h2>
        <article
          className="flex flex-col-reverse lg:flex-row mt-20
          justify-between items-center w-full h-full lg:py-36 lg:px-72"
        >
          <div className="w-3/4 md:w-2/5 text-justify">
            <p>
              Our extension makes easy to know whenever the games that you want
              to buy is in discount. More than that, you got notified to get
              limited time free games!
            </p>
          </div>
          <a target="_blank">
            <Image
              src={extensionImage}
              className="extension-image rounded-lg border-2 border-white mb-5"
              alt="Wishlist extension print."
              width={500}
            />
            <b className="flex gap-2 w-full justify-center items-center mb-20">
              Get it on <RiChromeFill /> (Come soon!)
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
        <Table showTitle title="About us">
          <div>
            <article>
              <p className="mb-4">
                Hi there! I&apos;m Douglas Guimarães, and I&pos;m thrilled to
                introduce you to Finituz, our new indie game studio that
                officially launched in 2024. At Finituz, we&apos;re passionate
                about pushing the boundaries of game development, and we&apos;re
                doing it with a suite of fantastic tools: Godot Engine, GIMP,
                Pixelorama, and Blender. I can&apos;t wait to share more about
                what we’re creating and how we&apos;re doing things a bit
                differently.
              </p>
              <p className="text-xl font-semibold mb-4">
                Our Vision and Future
              </p>
              <p>
                At Finituz, we&apos;re all about collaboration and innovation.
                By using Godot, GIMP, Pixelorama, and Blender, we&apos;re not
                just enhancing our own development process but also contributing
                to the broader indie game community. We believe in pushing the
                envelope of what indie games can achieve, and our team is
                dedicated to exploring new ideas and technologies.
              </p>
              <p className="mb-4">
                Looking ahead, we&apos;re excited about the possibilities that
                lie before us. Our commitment to these tools and our passion for
                game development are driving us to create something truly
                special. For everyone who&apos;s interested in indie gaming, we
                invite you to join us on this journey.
              </p>

              <p className="text-xl font-semibold mb-4">Stay Connected</p>
              <p className="mb-4">
                To keep up with our latest news, updates, and behind-the-scenes
                glimpses, be sure to subscribe to our newsletter. And don&apos;t
                miss out on the conversation—follow us on Discord, Reddit, and
                LinkedIn to engage with our community and be part of our
                exciting adventure.
              </p>

              <p>
                Thank you for being part of our story. We look forward to
                connecting with you and sharing the amazing things we have in
                store!
              </p>

              <p className="mt-8">— Douglas Guimarães</p>
            </article>
            <div className="text-center mt-10">
              <h2 className="text-4xl mb-5">
                Our <strong className="text-red-600">bloody</strong> team:
              </h2>
              <div className="flex flex-row justify-center items-center">
                <label className="flex flex-col justify-center items-center">
                  <Image
                    src={douglas}
                    alt="Photo of the game studio Founder"
                    width={100}
                    className="border-4 border-white rounded-full"
                  />
                  <span lang="pt-br">Douglas Guimarães</span>
                  <small className="text-zinc-300">Founder</small>
                </label>
              </div>
            </div>
          </div>
        </Table>
      </section>
    </main>
  );
}
