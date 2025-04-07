// import Image from "next/image";
import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";
import Button from "./components/Button";
import Footer from "./components/Footer";

import ReactionIcon from "./assets/icon-reaction.svg";
import MemoryIcon from "./assets/icon-memory.svg";
import VerbalIcon from "./assets/icon-verbal.svg";
import VisualIcon from "./assets/icon-visual.svg";

export default function Home() {
  return (
    <main className="bg-[var(--pale-blue)] min-h-screen flex flex-col justify-center items-center ">
      <div className="flex flex-col md:flex-row bg-[var(--white)] w-1/2 rounded-3xl shadow-[hsla(241,72%,46%,0.1)] shadow-lg">
        <section className="w-1/2">
          <ResultCard />
        </section>

        <section className="flex flex-col px-[2rem] py-[2.5rem] w-1/2">
          <h1 className="text-[1.5rem] font-bold text-[var(--dark-grey-blue)] pb-[1.5rem]">
            Summary
          </h1>
          <div className="w-full flex flex-col justify-center items-center gap-[1rem]">
            <SummaryCard
              domain="Reaction"
              bg_color="bg-[var(--light-red)]"
              text_color="text-[var(--red)]"
              score="80"
              icon={<ReactionIcon />}
            />
            <SummaryCard
              domain="Memory"
              bg_color="bg-[var(--light-yellow)]"
              text_color="text-[var(--yellow)]"
              score="92"
              icon={<MemoryIcon />}
            />
            <SummaryCard
              domain="Verbal"
              bg_color="bg-[var(--light-green)]"
              text_color="text-[var(--green)]"
              score="61"
              icon={<VerbalIcon />}
            />
            <SummaryCard
              domain="Visual"
              bg_color="bg-[var(--light-blue)]"
              text_color="text-[var(--blue)]"
              score="73"
              icon={<VisualIcon />}
            />
          </div>
          <div className="pt-[2.5rem]">
            <Button />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
