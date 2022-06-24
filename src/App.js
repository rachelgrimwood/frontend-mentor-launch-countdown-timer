import Countdown from "./components/Countdown";
import Socials from "./components/Socials";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="flex flex-col h-screen text-center">
      <main className="grow flex flex-col">
        <Countdown />
        <Socials />
      </main>
      <Attribution />
    </div>
  );
}

export default App;
