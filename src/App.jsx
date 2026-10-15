import { useEffect, useState, useRef } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

import image1 from "./assets/image_1.jpg";
import image2 from "./assets/image_2.jpg";
import image3 from "./assets/image_3.jpg";
import image4 from "./assets/image_4.jpg";
import image5 from "./assets/image_5.jpg";
import image6 from "./assets/image_6.jpg";
import cover from "./assets/yellow_cover.jpg";
import Card from "./components/Card/Card";
import rightSound from "./assets/right_answer.mp3";
import flipSound from "./assets/flip_card.mp3";
import shuffleSound from "./assets/shuffle.mp3";
import { Lottie } from "lottie-react";
import carAnimation from "./assets/Car.json";

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
  const [disabled, setDisabled] = useState(false);

  const rightAudio = useRef(null);
  const flipAudio = useRef(null);
  const shuffleAudio = useRef(null);

  useEffect(() => {
    flipAudio.current = new Audio(flipSound);
    rightAudio.current = new Audio(rightSound);
    shuffleAudio.current = new Audio(shuffleSound);

    flipAudio.current.preload = "auto";
    rightAudio.current.preload = "auto";
    shuffleAudio.current.preload = "auto";

    flipAudio.current.load();
    rightAudio.current.load();
    shuffleAudio.current.load();
  });

  const playSound = (audioRef) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(console.error);
    }
  };

  const shuffleCards = () => {
    playSound(shuffleAudio);
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoise = (card) => {
    if (disabled || card.matched || card === firstChoise || secChoise) {
      return;
    }
    playSound(flipAudio);
    firstChoise ? setSecChoise(card) : setFirstChoise(card);
  };

  useEffect(() => {
    if (firstChoise && secChoise) {
      setDisabled(true);
      if (firstChoise.src === secChoise.src) {
        setTimeout(() => {
          playSound(rightAudio);
        }, 400);
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
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [firstChoise, secChoise]);

  console.log(cards);

  const resetTurn = () => {
    setDisabled(false);
    setFirstChoise(null);
    setSecChoise(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="wrapper">
      <Header />
      <Button onClick={shuffleCards} text="New Game!" />
      <div className="container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            cover={cover}
            handleChoise={handleChoise}
            flipped={card === firstChoise || card === secChoise || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <div className="carAnimation">
        <Lottie src={carAnimation} loop={true} autoplay={true} />
      </div>
    </div>
  );
}

export default App;
