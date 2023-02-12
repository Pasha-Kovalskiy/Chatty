import { useState, useEffect } from 'react';
import './App.scss';

import CardList from './components/card-list/card-list.component.jsx';
import CategorySofa from './img/category-sofa.jpg';

const App = () => {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const newServers = [
      'Learn English',
      'Football',
      'BBC Channel',
      'News for every day',
    ];
    setServers(newServers);
  }, []);

  return (
    <div className="App">
      <CardList servers={servers} />
      <div className="server-panel">Server Panel</div>
      <div className="chat">Chat</div>
      <div className="chat-info">Chat Info</div>
      <img src={CategorySofa} />
    </div>
  );
};

export default App;
