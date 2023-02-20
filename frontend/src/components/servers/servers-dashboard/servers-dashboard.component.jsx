import './servers-dashboard.style.scss';

import Logo from '../logo/logo.component.jsx';
import ServerList from '../server-list/server-list.component.jsx';

const ServersDashboard = ({ LogoIcon, servers }) => {
  return (
    <div className="servers-dashboard">
      <Logo logoIcon={LogoIcon} />
      <div className="dash" />
      <ServerList servers={servers} />
    </div>
  );
};

export default ServersDashboard;
