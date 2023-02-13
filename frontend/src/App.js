import { useState, useEffect } from 'react';
import './App.scss';

import ServersDashboard from './components/servers/servers-dashboard/servers-dashboard.component.jsx';

import CategorySofa from './img/category-sofa.jpg';
import LogoIcon from './img/logo.png';

const App = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const newServers = [
      { name: 'Learn English', img: CategorySofa },
      { name: 'Football', img: CategorySofa },
      { name: 'BBC Channel', img: CategorySofa },
      { name: 'News for every day', img: CategorySofa },
    ];
    setServers(newServers);
  }, []);

  return (
    <div className="App">
      <ServersDashboard LogoIcon={LogoIcon} servers={servers} />
      <div className="server-panel">Server Panel</div>
      <div className="chat">Chat</div>
      <div className="chat-info">Chat Info</div>
    </div>
  );
};

export default App;
