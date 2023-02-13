import './servers-dashboard.style.scss';

import Logo from '../logo/logo.component.jsx';
import CardList from '../card-list/card-list.component.jsx';

const ServersDashboard = ({ LogoIcon, servers }) => {
  return (
    <div className="servers-dashboard">
      <Logo logoIcon={LogoIcon} />
      <div className="dash" />
      <CardList servers={servers} />
    </div>
  );
};

export default ServersDashboard;
