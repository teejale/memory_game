import { useState } from "react";
import "./App.css";
import image1 from "./assets/image_1.jpg";
import image2 from "./assets/image_2.jpg";
import image3 from "./assets/image_3.jpg";
import image4 from "./assets/image_4.jpg";
import image5 from "./assets/image_5.jpg";
import image6 from "./assets/image_6.jpg";
import cover from "./assets/cover.jpg";

const cardImages = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
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
  console.log(cards, turns);

  return (
    <div className="wrapper">
      <h1>Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <img className="front" src={card.src} alt="card-front" />
            <img className="back" src={cover} alt="card-back" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
