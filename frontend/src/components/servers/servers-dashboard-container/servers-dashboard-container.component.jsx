import './servers-dashboard-container.style.scss';

import ServersDashboard from '../servers-dashboard/servers-dashboard.component.jsx';
import AuthentificationIcons from '../../authentification/authentification-icons/authentification-icons.component.jsx';

const ServersDashboardContainer = ({ serversDashboardData }) => {
  const { LogoIcon, servers } = serversDashboardData;
  return (
    <div className="server-dashboard-container">
      <ServersDashboard LogoIcon={LogoIcon} servers={servers} />
      <AuthentificationIcons />
    </div>
  );
};

export default ServersDashboardContainer;
