import './card.style.scss';

const Card = ({ server }) => {
  return (
    <div className="server">
      <h1 className="server-name">{server}</h1>
    </div>
  );
};

export default Card;
