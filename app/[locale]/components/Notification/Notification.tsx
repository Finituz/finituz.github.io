import { useEffect } from "react";

export default function Notification({
  title,
  message,
  timeTilDie = 5,
}: {
  title: string;
  message: string;
  timeTilDie?: number; // as seconds, default is 5s
}) {
  const toId =
    "notification-" + title.replace(" ", "-") + "-" + message.replace(" ", "-");

  useEffect(() => {
    const notification = document.getElementById(toId) as HTMLDivElement;

    console.log(notification);
    setTimeout(() => {
      notification.style.opacity = "0";
    }, timeTilDie * 1000);
  });

  return (
    <div
      id={toId}
      className="fixed border border-white top-24 right-5 bg-red-900 p-2 rounded-lg duration-500 transition-opacity"
    >
      <header>{title}</header>
      <hr />
      <span>{message}</span>
    </div>
  );
}
