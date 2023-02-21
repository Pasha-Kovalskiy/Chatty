import './chat-dashboard.style.scss';

import ChatHeader from '../chat-header/chat-header.component.jsx';
import ChatContent from '../chat-content/chat-content.component.jsx';

const ChatDashboard = () => {
  return (
    <div className="chat-dashboard">
      <ChatHeader />
      <ChatContent />
    </div>
  );
};

export default ChatDashboard;
