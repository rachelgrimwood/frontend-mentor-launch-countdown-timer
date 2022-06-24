const FlipCard = ({ num }) => {
  const text = String(num).padStart(2, 0);
  return (
    <div className="relative h-16 mt-14">
      <div className="absolute h-8 w-20 top-0 inset-x-0 mx-auto my-0 bg-dark-blue overflow-hidden"></div>
      <div className="absolute h-8 w-20 bottom-0 inset-x-0 mx-auto my-0 bg-dark-blue z-1"></div>
      <p className="relative leading-[4rem] z-3 text-5xl text-soft-red">{text || "00"}</p>
      <div className="absolute h-8 w-20 top-0 inset-x-0 mx-auto my-0 bg-very-dark-blue opacity-20 z-4"></div>
      <p className="text-grayish-blue text-xs tracking-[0.2em] mt-4">Seconds</p>
    </div>
  );
};

export default FlipCard;
