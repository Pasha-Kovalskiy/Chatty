import { Outlet } from 'react-router-dom';

import './servers-dashboard.style.scss';

import ServersDashboardContainer from '../servers-dashboard-container/servers-dashboard-container.component.jsx';
import AuthentificationIcons from '../../authentification/authentification-icons/authentification-icons.component.jsx';

const ServersDashboard = ({ LogoIcon, servers }) => {
  return (
    <>
      <div className='servers-dashboard'>
        <ServersDashboardContainer LogoIcon={LogoIcon} servers={servers} />
        <AuthentificationIcons />
      </div>
      <Outlet />
    </>
  );
};

export default ServersDashboard;
