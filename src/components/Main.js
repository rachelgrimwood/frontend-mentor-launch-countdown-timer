import Countdown from "./Countdown";

const Main = () => {
  return (
    <div className="h-4/5 bg-[url('../src/images/bg-stars.svg')] uppercase font-redhat px-4 flex flex-col justify-center">
      <h1 className="text-white w-72 sm:w-full my-0 mx-auto text-xl md:text-[1.35rem] tracking-[0.4em]">
        We're launching soon
      </h1>
      <Countdown />
    </div>
  );
};

export default Main;
