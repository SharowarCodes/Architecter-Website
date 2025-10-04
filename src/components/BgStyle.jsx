export default function BgStyle() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex -z-10">
      {Array.from({ length: 32 }).map((_, i) => (
        <div
          key={i}
          className={`w-[3.14%] h-full ${
            i % 2 === 0 ? "bg-white" : "bg-gray-100"
          }`}
        ></div>
      ))}
    </div>
  );
}
