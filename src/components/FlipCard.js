const FlipCard = ({ num, unit }) => {
  const text = String(num).padStart(2, 0);

  return (
    <div className="relative h-16 sm:h-20 md:h-32 lg:h-48 mt-14 md:mt-20 lg:mt-32 mx-2 sm:mx-3 lg:mx-6 shadow-[black_0px_10px_5px_-3px]">
      <div className="card-top"></div>
      <div className="card-bottom"></div>
      <p className="relative leading-[4rem] sm:leading-[5rem] md:leading-[8rem] lg:leading-[12rem] w-16 sm:w-20 md:w-32 lg:w-48 z-20 text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-soft-red">
        {text || "00"}
      </p>
      <div className="absolute h-8 sm:h-10 md:h-16 lg:h-24 w-16 sm:w-20 md:w-32 lg:w-48 top-0 inset-x-0 mx-auto my-0 rounded-sm bg-very-dark-blue opacity-20 z-40"></div>

      <p className="text-grayish-blue text-[0.5rem] md:text-xs lg:text-xs tracking-[0.2em] mt-2 sm:mt-3 lg:mt-6">
        {unit}
      </p>
    </div>
  );
};

export default FlipCard;
