import './server-item.style.scss';

const ServerItem = ({ server }) => {
  const { img = '' } = server;
  return (
    <div className="server">
      <a className="server__link" href="#">
        <img className="server__img" src={img} alt="img" />
      </a>
    </div>
  );
};

export default ServerItem;
