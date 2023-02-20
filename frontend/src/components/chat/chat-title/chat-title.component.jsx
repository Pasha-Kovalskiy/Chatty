import './chat-title.style.scss';

const ChatTitle = () => {
  return (
    <div className="title">
      <div className="avatar">Avatar</div>
      <a className="title__link" href="#">
        <h3 className="title__heading">Predator</h3>
      </a>
      <span className="title__status" />
    </div>
  );
};

export default ChatTitle;
