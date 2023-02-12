import './card-list.style.scss';

import Card from '../card/card.component.jsx';

const CardList = ({ servers }) => {
  return (
    <div className="servers-panel">
      {servers.map((server, index) => {
        return <Card server={server} key={index} />;
      })}
    </div>
  );
};

export default CardList;
