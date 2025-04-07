import React, { JSX } from "react";

interface SummaryCardProps {
  domain: string;
  color: string;
  score: number;
  // icon: JSX.Element;
}

export default function SummaryCard({
  domain,
  color,
  score,
}: // icon,
SummaryCardProps) {
  return (
    <div>
      <p>{domain}</p>
      <div>{color}</div>
      <div>{score}</div>
      {/* <div>{icon}</div> */}
    </div>
  );
}
