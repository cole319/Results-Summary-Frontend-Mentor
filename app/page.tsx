// import Image from "next/image";
import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";

import ReactionIcon from "./assets/icon-reaction.svg";

export default function Home() {
  return (
    <main className="bg-[var(--pale-blue)] min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row bg-[var(--white)] w-1/2 rounded-3xl">
        <section className="w-1/2">
          <ResultCard />
        </section>

        <section className="flex flex-col px-[3rem] py-[2.5rem]">
          <h1 className="text-[1.5rem] font-bold text-[var(--dark-grey-blue)]">
            Summary
          </h1>
          <div>
            <SummaryCard
              domain="Reaction"
              color={`var(--light-red)`}
              score={80}
              icon={ReactionIcon}
            />
            {/* <SummaryCard />
            <SummaryCard />
            <SummaryCard /> */}
          </div>
        </section>
      </div>
    </main>
  );
}
