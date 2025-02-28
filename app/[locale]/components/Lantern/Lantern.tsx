export default function Lantern({ className }: { className?: string }) {
  return (
    <div
      className={
        "absolute transform transparent md:shadow-[20px_80px_2000px_100px_#ff0000] " +
        className
      }
    ></div>
  );
}
