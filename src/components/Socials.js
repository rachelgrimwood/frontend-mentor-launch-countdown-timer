const Socials = () => {
  return (
    <div className="h-1/5 bg-[url('../src/images/pattern-hills.svg')] bg-no-repeat [background-position:85%_bottom] md:[background-position:right_top] bg-cover">
      <div className="h-full md:pt-20 flex justify-center items-end md:items-center gap-8 sm:gap-10 md:gap-12">
        <a
          className="block h-6 w-6 sm:h-8 sm:w-8"
          href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
          title="Facebook">
          <img
            className="h-6 w-6 sm:h-8 sm:w-8"
            src={require("../images/icon-facebook.svg").default}
            alt="Facebook"
          />
        </a>
        <a
          className="block h-6 w-6 sm:h-8 sm:w-8"
          href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
          title="Pinterest">
          <img
            className="h-6 w-6 sm:h-8 sm:w-8"
            src={require("../images/icon-pinterest.svg").default}
            alt="Pinterest"
          />
        </a>
        <a
          className="block h-6 w-6 sm:h-8 sm:w-8"
          href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
          title="Instagram">
          <img
            className="h-6 w-6 sm:h-8 sm:w-8"
            src={require("../images/icon-instagram.svg").default}
            alt="Instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
