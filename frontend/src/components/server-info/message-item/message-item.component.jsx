import { ReactSVG } from 'react-svg';

import './message-item.style.scss';
import MessageRemoveIcon from '../../../img/icons/message-remove-icon.svg';

const MessageItem = ({ itemData }) => {
  const { title = '', icon = '' } = itemData;
  return (
    <a className="message-item" href="#">
      <div className="message-item__info">
        <ReactSVG className="message-item__avatar-icon" src={icon} />
        <h3 className="message-item__title">{title}</h3>
      </div>
      <ReactSVG className="message-item__remove-icon" src={MessageRemoveIcon} />
    </a>
  );
};

export default MessageItem;
