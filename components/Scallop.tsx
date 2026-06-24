export default function Scallop() {
  return (
    <div className="absolute top-0 left-0 w-full h-12 overflow-hidden">
      <div className="flex">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full border border-[#DDF7F4] -mt-6 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}