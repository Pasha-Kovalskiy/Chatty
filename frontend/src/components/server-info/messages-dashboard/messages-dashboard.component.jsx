import './messages-dashboard.style.scss';

import MessagesHeader from '../messages-header/messages-header.component.jsx';
import MessagesList from '../messages-list/messages-list.component.jsx';

const MessagesDashboard = ({ data }) => {
  return (
    <div className="messages-dashboard">
      <MessagesHeader header={data?.header} />
      <MessagesList messagesData={data?.messages} />
    </div>
  );
};

export default MessagesDashboard;
