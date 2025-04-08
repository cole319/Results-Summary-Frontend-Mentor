import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <div className="text-center p-[3rem] md:pt-[3rem] md:pb-[0rem] text-xs text-[var(--violet-blue)]">
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="text-[var(--red)] hover:underline"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.github.com/cole319"
        target="_blank"
        className="text-[var(--red)] hover:underline"
      >
        Suryarghya
      </a>
      .
    </div>
  );
}
