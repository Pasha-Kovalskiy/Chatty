import { ReactSVG } from 'react-svg';

import './message-item.style.scss';
import MessageRemoveIcon from '../../../img/icons/message-remove-icon.svg';
import { Link } from 'react-router-dom';

const MessageItem = ({ itemData }) => {
  const { title = '', icon = '' } = itemData;
  return (
    <Link className='message-item' to='/@me/chat'>
      <div className='message-item__info'>
        <ReactSVG className='message-item__avatar-icon' src={icon} />
        <h3 className='message-item__title'>{title}</h3>
      </div>
      <ReactSVG className='message-item__remove-icon' src={MessageRemoveIcon} />
    </Link>
  );
};

export default MessageItem;
