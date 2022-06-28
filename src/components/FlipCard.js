const FlipCard = ({ num, unit }) => {
  const text = String(num).padStart(2, 0);

  return (
    <div className="relative h-16 sm:h-20 md:h-32 lg:h-40 mt-16 md:mt-20 lg:mt-28 mb-28 mx-2 sm:mx-3 lg:mx-4 shadow-[black_0px_5px_2.5px_-1.5px] lg:shadow-[black_0px_6px_3px_-2px]">
      <div className="card-top"></div>
      <div className="card-bottom"></div>
      <p className="relative leading-[4rem] sm:leading-[5rem] md:leading-[8rem] lg:leading-[10rem] w-16 sm:w-20 md:w-32 lg:w-40 z-20 text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] text-soft-red">
        {text || "00"}
      </p>
      <div className="absolute h-8 sm:h-10 md:h-16 lg:h-20 w-16 sm:w-20 md:w-32 lg:w-40 top-0 inset-x-0 mx-auto my-0 rounded-sm bg-very-dark-blue opacity-20 z-40"></div>
      <p className="text-grayish-blue text-[0.5rem] md:text-xs lg:text-sm tracking-[0.5em] mt-2 sm:mt-3 lg:mt-4">
        {unit}
      </p>
    </div>
  );
};

export default FlipCard;
