import { JSX } from "react";

export default function Button(): JSX.Element {
  return (
    <button
      className="bg-[var(--dark-grey-blue)] text-[var(--pale-blue)] 
    p-[0.9rem] text-[1rem] font-semibold rounded-full w-full cursor-pointer hover:bg-[hsla(224,30%,27%,0.9)]"
    >
      Continue
    </button>
  );
}
