import { AlertTriangle } from "lucide-react";

export default function NoticeBar() {
  return (
    <div className="bg-[#1B3A6B] py-3 text-white">
      <div className="container flex items-center justify-center gap-3 px-4">
        <AlertTriangle size={18} className="shrink-0 text-[#F4A261]" />
        <p className="text-center text-sm font-bold md:text-base">
          MARTES CERRADO <span className="font-normal opacity-80">Excepto festivos y vísperas de festivos</span>
        </p>
      </div>
    </div>
  );
}