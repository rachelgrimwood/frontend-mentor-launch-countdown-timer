const FlipCard = ({ num, unit }) => {
  const text = String(num).padStart(2, 0);

  return (
    <div className="relative h-16 sm:h-20 md:h-32 lg:h-36 mt-16 md:mt-20 lg:mt-24 mb-20 sm:mb-16 mx-2 sm:mx-3 lg:mx-4 shadow-[hsl(234,17%,12%)_0px_5px_2.5px_-1.5px] lg:shadow-[hsl(234,17%,12%)_0px_8px_4px_-2px]">
      <div className="card-top"></div>
      <div className="card-bottom"></div>
      <p className="relative leading-[4rem] sm:leading-[5rem] md:leading-[8rem] lg:leading-[9rem] w-16 sm:w-20 md:w-32 lg:w-36 z-20 text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] text-soft-red">
        {text || "00"}
      </p>
      <div className="absolute h-8 sm:h-10 md:h-16 lg:h-[4.5rem] w-16 sm:w-20 md:w-32 lg:w-36 top-0 inset-x-0 mx-auto my-0 rounded-sm bg-very-dark-blue opacity-20 z-40"></div>
      <p className="text-grayish-blue text-[0.5rem] md:text-xs lg:text-sm tracking-[0.5em] mt-3 sm:mt-4 lg:mt-5">
        {unit}
      </p>
    </div>
  );
};

export default FlipCard;
