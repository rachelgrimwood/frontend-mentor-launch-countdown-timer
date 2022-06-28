import { ReactComponent as FacebookLogo } from "../images/icon-facebook.svg";
import { ReactComponent as PinterestLogo } from "../images/icon-pinterest.svg";
import { ReactComponent as InstagramLogo } from "../images/icon-instagram.svg";

const Logo = ({ SvgComponent, title }) => {
  return (
    <a
      className="block h-6 w-6 sm:h-8 sm:w-8"
      href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
      title={title}>
      <SvgComponent className="sm:scale-125 origin-top-left fill-grayish-blue hover:fill-soft-red" />
    </a>
  );
};

const Socials = () => {
  return (
    <div className="h-1/5 bg-[url('../src/images/pattern-hills.svg')] bg-no-repeat [background-position:85%_bottom] md:[background-position:right_top] bg-cover">
      <div className="h-full md:pt-20 flex justify-center items-end md:items-center gap-8 sm:gap-10 md:gap-12">
        <Logo SvgComponent={FacebookLogo} title="Facebook" />
        <Logo SvgComponent={PinterestLogo} title="Pinterest" />
        <Logo SvgComponent={InstagramLogo} title="Instagram" />
      </div>
    </div>
  );
};

export default Socials;
