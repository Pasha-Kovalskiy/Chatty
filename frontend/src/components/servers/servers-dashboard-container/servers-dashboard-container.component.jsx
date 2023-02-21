import './servers-dashboard-container.style.scss';

import Logo from '../logo/logo.component.jsx';
import ServerList from '../server-list/server-list.component.jsx';

const ServersDashboardContainer = ({ LogoIcon, servers }) => {
  return (
    <div className='server-dashboard-container'>
      <Logo logoIcon={LogoIcon} />
      <div className='dash' />
      <ServerList servers={servers} />
    </div>
  );
};

export default ServersDashboardContainer;
