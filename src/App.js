import Main from "./components/Main";
import Socials from "./components/Socials";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="flex flex-col h-screen h-[fill-available] text-center">
      <main className="grow flex flex-col bg-gradient-to-b from-blue-black to-very-dark-blue">
        <Main />
        <Socials />
      </main>
      <Attribution />
    </div>
  );
}

export default App;
