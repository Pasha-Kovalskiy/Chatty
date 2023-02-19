import './messages-list.style.scss';

import MessageItem from '../message-item/message-item.component.jsx';

const MessagesList = ({ messagesData = [] }) => {
  return (
    <div className="messages-list">
      {messagesData.map((messageData, index) => {
        return <MessageItem itemData={messageData} key={index} />;
      })}
    </div>
  );
};

export default MessagesList;
