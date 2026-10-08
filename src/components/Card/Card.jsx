import "./Card.module.css";

const Card = ({ card, cover }) => {
  const clickHandle = () => {};

  return (
    <div className="card">
      <img className="front" src={card.src} alt="card-front" />
      <img className="back" src={cover} alt="card-back" onClick={handleClick} />
    </div>
  );
};

export default Card;
