import music from "./assets/music.mp3";

function playIt() {
  new Audio(music).play();
}

function App() {
  return (
    <div id="App" className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        <button className="font-underline" onClick={playIt}>
          Trick or Treat!
        </button>
      </h1>
    </div>
  );
}

export default App;
