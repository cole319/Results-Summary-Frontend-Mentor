export default function ResultCard() {
  return (
    <div
      className="bg-gradient-to-b from-[var(--light-slate-blue)] to-[var(--light-royal-blue)] h-full
    flex flex-col items-center justify-center px-[3rem] py-[2rem] md:py-[2.5rem] rounded-b-3xl md:rounded-3xl space-y-[0.9rem] sm:space-y-[1.2rem] md:space-y-[1.6rem] text-center"
    >
      <h1 className="text-[var(--light-lavender)] text-xl md:text-[1.5rem] font-semibold">
        Your Result
      </h1>
      <div
        className="flex flex-col items-center justify-center rounded-full w-[9rem] h-[9rem] md:w-[13rem] md:h-[13rem] 
      bg-gradient-to-b from-[var(--violet-blue)] to-[var(--persian-blue)] 
      p-[3rem] space-y-1"
      >
        <p className="text-5xl md:text-7xl font-bold text-[var(--white)]">76</p>

        <p className="text-[12px] sm:text-[15px] md:text-[18px] text-[var(--light-lavender)] font-semibold opacity-50">
          of 100
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-[var(--white)] text-[1.6rem] md:text-[2rem] font-semibold">
          Great
        </h2>
        <p className="text-[15px] md:text-[16px] text-[var(--light-lavender)] leading-4.5 py-[0.5rem] px-0 xs:px-[1rem] md:py-0 font-medium">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
