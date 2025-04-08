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
}: SummaryCardProps): JSX.Element {
  return (
    <div
      className={`flex ${bg_color} justify-between items-center w-full py-[1rem] px-[0.5rem] xs:p-[1rem] rounded-xl text-[0.9rem] font-bold`}
    >
      <div className="flex items-center gap-[0.15rem] xs:gap-[0.8rem]">
        {icon}
        <p className={`${text_color} font-bold`}>{domain}</p>
      </div>
      <div className="flex gap-[0.1rem] xs:gap-[0.4rem] text-[var(--dark-grey-blue)]">
        {score}
        <span className="text-slate-400 font-semibold">/</span>
        <p className="text-slate-400 font-semibold">100</p>
      </div>
    </div>
  );
}
