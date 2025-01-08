export default function Lantern({ className }: { className?: string }) {
  return (
    <div
      className={
        "absolute transform transparent shadow-[10px_80px_1000px_120px_#ff0000] " +
        className
      }
    ></div>
  );
}
