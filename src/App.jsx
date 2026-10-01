import "./App.css";

const cardImages = [
  { src: "/assets/image_1.jpg" },
  { src: "/assets/image_2.jpg" },
  { src: "/assets/image_3.jpg" },
  { src: "/assets/image_4.jpg" },
  { src: "/assets/image_5.jpg" },
  { src: "/assets/image_6.jpg" },
];

function App() {
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages];
  };

  return (
    <div>
      <h1>Memory</h1>
      <button>New Game</button>
    </div>
  );
}

export default App;
