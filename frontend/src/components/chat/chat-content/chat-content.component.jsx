import './chat-content.style.scss';

import ChatPlaceholder from '../chat-placeholder/chat-placeholder.component.jsx';
import ChatInfo from '../chat-info/chat-info.component.jsx';

const ChatContent = () => {
  return (
    <div className="chat-content">
      <ChatPlaceholder />
      <ChatInfo />
    </div>
  );
};

export default ChatContent;
