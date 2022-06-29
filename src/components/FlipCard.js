import { useState, useEffect } from "react";

const FlipCard = ({ currNum, nextNum, unit }) => {
  const padNum = (num) => {
    return String(num).padStart(2, 0);
  };

  const [isFlipping, setIsFlipping] = useState(false);
  const [[current, next], setNumber] = useState([currNum, nextNum]);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setIsFlipping(true);
    // eslint-disable-next-line
  }, [currNum, nextNum]);

  const animationEnd = () => {
    setIsFlipping(false);
    setNumber([currNum, nextNum]);
  };

  return (
    <div className="mb-16">
      <div className="relative w-16 sm:w-20 md:w-32 lg:w-36 h-16 sm:h-20 md:h-32 lg:h-36 mt-16 md:mt-20 lg:mt-[6.5rem] mx-2 sm:mx-3 lg:mx-4 shadow-[hsl(234,17%,12%)_0px_5px_2.5px_-1.5px] lg:shadow-[hsl(234,17%,12%)_0px_8px_4px_-2px]">
        {/* page 1 */}
        <div className="flip-container-top">
          <div className="card-top"></div>
          <p className="number-text z-10">{padNum(current) || "00"}</p>
        </div>

        {/* page 2 */}
        <div
          className={
            isFlipping
              ? "flip-container-bottom [transition:_transform_0.5s_ease] [transform-origin:top] [transform:rotateX(-180deg)] [backface-visibility:hidden] z-40"
              : "flip-container-bottom z-40"
          }
          onTransitionEnd={animationEnd}>
          <div className="card-bottom"></div>
          <p className="number-text -translate-y-8 sm:-translate-y-10 md:-translate-y-16 lg:translate-y-[-4.5rem]">
            {padNum(current) || "00"}
          </p>
        </div>

        {/* page 3 */}
        <div
          className={
            isFlipping
              ? "flip-container-top [backface:hidden] [transition:_transform_0.5s_ease] [transform-origin:0%_100%] [transform:rotateX(0deg)] z-20"
              : "flip-container-top [transform-origin:0%_100%] [transform:rotateX(180deg)] z-20"
          }>
          <p className="number-text z-30">{padNum(next) || "00"}</p>
          <div className="card-top"></div>
        </div>

        {/* page 4 */}
        <div className="flip-container-bottom">
          <div className="card-bottom z-0"></div>
          <p className="number-text z-10 -translate-y-8 sm:-translate-y-10 md:-translate-y-16 lg:translate-y-[-4.5rem]">
            {padNum(next) || "00"}
          </p>
        </div>

        {/* Top half overlay */}
        <div className="absolute h-8 sm:h-10 md:h-16 lg:h-[4.5rem] w-16 sm:w-20 md:w-32 lg:w-36 top-0 inset-x-0 mx-auto my-0 rounded-sm bg-very-dark-blue opacity-20 z-50"></div>
      </div>
      {/* Bottom text */}
      <p className="block text-grayish-blue text-[0.5rem] md:text-xs lg:text-sm tracking-[0.5em] mt-3 sm:mt-4 lg:mt-5">
        {unit}
      </p>
    </div>
  );
};

export default FlipCard;
