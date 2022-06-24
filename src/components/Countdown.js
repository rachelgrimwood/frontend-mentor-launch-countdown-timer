const Countdown = () => {
  return (
    <div className="h-3/4 bg-[url('../src/images/bg-stars.svg')] uppercase font-redhat px-4 flex flex-col justify-center">
      <h1 className="text-white text-2xl tracking-[0.3em]">We're launching soon</h1>
      <p className="text-grayish-blue text-xs tracking-[0.2em]">Days Hours Minutes Seconds</p>
    </div>
  );
};

export default Countdown;
