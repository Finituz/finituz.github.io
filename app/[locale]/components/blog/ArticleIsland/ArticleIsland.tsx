import {
  RiMessageLine,
  RiShareLine,
  RiThumbDownLine,
  RiThumbUpLine,
} from "react-icons/ri";
import Notification from "../../Notification/Notification";
import { MouseEvent, useRef, useState } from "react";

export default function ArticleIsland() {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });
  const ToggleSymbol = useRef<HTMLDivElement>(null);

  const ToggleIsland = (event: MouseEvent) => {
    event.stopPropagation();
    if (!ToggleSymbol.current) return;

    if (event.currentTarget.classList.contains("-left-16")) {
      (event.currentTarget as HTMLDivElement).classList.replace(
        "-left-16",
        "left-2",
      );
      ToggleSymbol.current.innerHTML = "<";
    } else {
      (event.currentTarget as HTMLDivElement).classList.replace(
        "left-2",
        "-left-16",
      );

      ToggleSymbol.current.innerHTML = ">";
    }
  };

  const copyToShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setNotification({
      title: "Copied!",
      message: "Link copied to clipboard.",
    });

    console.log("Notification sended! ", notification);
  };
  return (
    <>
      <div
        onClick={ToggleIsland}
        className="flex fixed w-fit bg-red-900  transition-all duration-500 left-2 top-1/2 transform -translate-y-1/2 border border-white rounded-lg"
      >
        <div className="flex flex-col gap-5 p-5 pr-2">
          <span className="cursor-pointer hover:bg-red-400 transition-colors duration-500 rounded-xl p-2">
            <RiThumbUpLine />
          </span>
          <span className="cursor-pointer hover:bg-red-400 transition-colors duration-500 rounded-xl p-2">
            <RiThumbDownLine />
          </span>
          <span className="cursor-pointer hover:bg-red-400 transition-colors duration-500 rounded-xl p-2">
            <RiMessageLine />
          </span>
          <span
            onClick={copyToShare}
            className="cursor-pointer hover:bg-red-400 transition-colors duration-500 rounded-xl p-2"
          >
            <RiShareLine />
          </span>
        </div>
        <div
          ref={ToggleSymbol}
          className="bg-red-400 rounded-tr-lg rounded-br-lg flex items-center p-1 cursor-pointer"
        >
          {"<"}
        </div>
      </div>
      {notification.message.length > 0 ? (
        <Notification {...notification} />
      ) : null}
    </>
  );
}
