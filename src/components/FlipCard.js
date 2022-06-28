const FlipCard = ({ num, unit }) => {
  const text = String(num).padStart(2, 0);

  return (
    <div className="relative h-16 sm:h-20 md:h-32 mt-16 md:mt-28 mb-20 sm:mb-16 mx-2 sm:mx-3 shadow-[hsl(234,17%,12%)_0px_5px_2.5px_-1.5px] md:shadow-[hsl(234,17%,12%)_0px_8px_4px_-2px]">
      <div className="card-top"></div>
      <div className="card-bottom"></div>
      <p className="relative leading-[4rem] sm:leading-[5rem] md:leading-[8rem] w-16 sm:w-20 md:w-32 z-20 text-3xl sm:text-5xl md:text-7xl text-soft-red">
        {text || "00"}
      </p>
      <div className="absolute h-8 sm:h-10 md:h-16 w-16 sm:w-20 md:w-32 top-0 inset-x-0 mx-auto my-0 rounded-sm bg-very-dark-blue opacity-20 z-40"></div>
      <p className="text-grayish-blue text-[0.5rem] md:text-sm tracking-[0.5em] mt-3 sm:mt-4 md:mt-5">
        {unit}
      </p>
    </div>
  );
};

export default FlipCard;
