import './Card.css';

const Card = ({ imageUrl, altText, onClick }: { imageUrl: string; altText: string; onClick: () => void }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imageUrl} alt={altText} />
    </div>
  );
};

export default Card;
