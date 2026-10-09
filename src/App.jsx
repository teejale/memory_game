import { useEffect, useState } from "react";
import "./App.css";
import image1 from "./assets/image_1.jpg";
import image2 from "./assets/image_2.jpg";
import image3 from "./assets/image_3.jpg";
import image4 from "./assets/image_4.jpg";
import image5 from "./assets/image_5.jpg";
import image6 from "./assets/image_6.jpg";
import cover from "./assets/cover.jpg";
import Card from "./components/Card/Card";

const cardImages = [
  { src: image2, matched: false },
  { src: image3, matched: false },
  { src: image1, matched: false },
  { src: image4, matched: false },
  { src: image5, matched: false },
  { src: image6, matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoise, setFirstChoise] = useState(null);
  const [secChoise, setSecChoise] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoise = (card) => {
    firstChoise ? setSecChoise(card) : setFirstChoise(card);
  };

  useEffect(() => {
    if (firstChoise && secChoise) {
      if (firstChoise.src === secChoise.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoise.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        resetTurn();
      }
    }
  }, [firstChoise, secChoise]);

  const resetTurn = () => {
    setFirstChoise(null);
    setSecChoise(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="wrapper">
      <h1>Memory</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            cover={cover}
            handleChoise={handleChoise}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
