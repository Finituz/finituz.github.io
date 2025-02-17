import {
  RiMessageLine,
  RiShareLine,
  RiThumbDownLine,
  RiThumbUpLine,
} from "react-icons/ri";
import Notification from "../Notification/Notification";
import { useState } from "react";

export default function ArticleIsland() {
  const [notification, setNotification] = useState({
    title: "",
    message: "",
  });

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
      <div className="fixed flex flex-col bg-red-900 left-5 top-1/2 transform -translate-y-1/2 gap-5 border border-white rounded-lg p-5 ">
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
      {notification.message.length > 0 ? (
        <Notification {...notification} />
      ) : null}
    </>
  );
}
