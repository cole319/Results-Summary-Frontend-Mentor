export default function ResultCard() {
  return (
    <div
      className="bg-gradient-to-b from-[var(--light-slate-blue)] to-[var(--light-royal-blue)] 
    flex flex-col items-center justify-center px-[3rem] py-[2.5rem] rounded-3xl space-y-[1.6rem] text-center"
    >
      <h1 className="text-[var(--light-lavender)] text-[1.5rem] font-semibold">
        Your Result
      </h1>
      <div
        className="flex flex-col items-center justify-center rounded-full w-[13rem] h-[13rem]
      bg-gradient-to-b from-[var(--violet-blue)] to-[var(--persian-blue)] 
      p-[3rem] space-y-1"
      >
        <p className="text-7xl font-bold text-[var(--white)]">76</p>

        <p className="text-[18px] text-[var(--light-lavender)] font-semibold opacity-50">
          of 100
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="text-[var(--white)] text-[2rem] font-semibold">Great</h2>
        <p className="text-[18px] text-[var(--light-lavender)] leading-tight pb-[0.5rem]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}
