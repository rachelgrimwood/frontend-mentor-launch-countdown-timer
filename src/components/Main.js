import Countdown from "./Countdown";

const Main = () => {
  return (
    <div className="h-3/4 bg-[url('../src/images/bg-stars.svg')] uppercase font-redhat px-4 flex flex-col justify-center">
      <h1 className="text-white text-2xl tracking-[0.3em]">We're launching soon</h1>
      <Countdown />
    </div>
  );
};

export default Main;
