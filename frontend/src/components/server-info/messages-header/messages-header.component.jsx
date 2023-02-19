import { ReactSVG } from 'react-svg';

import './messages-header.style.scss';

const MessagesHeader = ({ header }) => {
  console.log(header);
  return (
    <div className="messages-header">
      <h3 className="messages-header__title">{header?.title}</h3>
      <ReactSVG
        className="messages-header__add-icon"
        src={header?.icon ? header.icon : ''}
        tabIndex="0"
      />
    </div>
  );
};

export default MessagesHeader;
