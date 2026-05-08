type BrandMarkProps = {
  inverted?: boolean;
};

export default function BrandMark({ inverted = false }: BrandMarkProps) {
  const titleClass = inverted ? "text-white" : "text-[#1B3A6B]";
  const subtitleClass = inverted ? "text-[#A8D4F0]" : "text-[#E63946]";

  return (
    <div className="flex flex-col leading-none">
      <span className={`font-display text-2xl font-black tracking-tight ${titleClass}`}>
        Costumbres
      </span>
      <span className={`text-sm font-extrabold uppercase tracking-[0.35em] ${subtitleClass}`}>
        Argentinas
      </span>
    </div>
  );
}