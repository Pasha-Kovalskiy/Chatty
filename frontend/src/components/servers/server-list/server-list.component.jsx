import './server-list.style.scss';

import ServerItem from '../server-item/server-item.component.jsx';

const ServerList = ({ servers }) => {
  return (
    <div className="server-list">
      {servers.map((server, index) => {
        return <ServerItem server={server} key={index} />;
      })}
    </div>
  );
};

export default ServerList;
