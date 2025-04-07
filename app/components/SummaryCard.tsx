import React, { JSX } from "react";

interface SummaryCardProps {
  domain: string;
  bg_color: string;
  text_color: string;
  score: string;
  icon: JSX.Element;
}

export default function SummaryCard({
  domain,
  bg_color,
  text_color,
  score,
  icon,
}: SummaryCardProps) {
  return (
    <div
      className={`flex ${bg_color} justify-between items-center w-full p-[1rem] rounded-xl text-[0.9rem] font-bold`}
    >
      <div className="flex items-center gap-[0.8rem]">
        {icon}
        <p className={`${text_color} font-bold`}>{domain}</p>
      </div>
      <div className="flex gap-[0.4rem] text-[var(--dark-grey-blue)]">
        {score}
        <span className="text-slate-400 font-semibold">/</span>
        <p className="text-slate-400 font-semibold">100</p>
      </div>
    </div>
  );
}
