const SocialLink = (props) => {
  const { imgPath, title } = props;
  const path = imgPath;
  console.log(typeof path);
  return (
    <a
      className="block h-8 w-8"
      href="https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-"
      title={title}>
      <img className="h-8 w-8" src={require(path).default} alt={title} />
    </a>
  );
};

export default SocialLink;
