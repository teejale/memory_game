import { useState } from "react";
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
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div>
      <h1>Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
