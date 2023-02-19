import './card.style.scss';

const Card = ({ server }) => {
  const { img } = server;
  return (
    <div className="card">
      <a className="card__link" href="#">
        <img className="card__img" src={img} alt="img" />
      </a>
    </div>
  );
};

export default Card;
