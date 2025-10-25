import music from "./assets/music.mp3";

function playIt() {
  new Audio(music).play()
}

function App() {
  return (
    <div id="App">
      <h1 className="text-3xl font-bold">
        <button className="font-underline" onClick={playIt}>Click for a trick (or a treat)</button>
      </h1>
    </div>
  )
}

export default App
