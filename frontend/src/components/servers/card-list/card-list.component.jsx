import './card-list.style.scss';

import Card from '../card/card.component.jsx';

const CardList = ({ servers }) => {
  return (
    <div className="card-list">
      {servers.map((server, index) => {
        return <Card server={server} key={index} />;
      })}
    </div>
  );
};

export default CardList;
