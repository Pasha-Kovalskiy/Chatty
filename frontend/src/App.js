import { useState, useEffect } from 'react';
import './App.scss';

import ServersDashboard from './components/servers/servers-dashboard/servers-dashboard.component.jsx';
import ServerDashboard from './components/server-info/server-dashboard/server-dashboard.component.jsx';
import ChatDashboard from './components/chat/chat-dashboard/chat-dashboard.component.jsx';

import CategorySofa from './img/category-sofa.jpg';
import LogoIcon from './img/logo.png';
import FriendsIcon from './img/icons/friends-icon.svg';
import FavoriteIcon from './img/icons/favorite-icon.svg';
import MessagesAddIcon from './img/icons/messages-add-icon.svg';

const App = () => {
  const [servers, setServers] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [messagesData, setMessagesData] = useState({});
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const newServers = [
      { name: 'Learn English', img: CategorySofa },
      { name: 'Football', img: CategorySofa },
      { name: 'BBC Channel', img: CategorySofa },
      { name: 'News for every day', img: CategorySofa },
    ];
    setServers(newServers);
  }, []);

  useEffect(() => {
    const newCategoryData = [
      { title: 'Friends', Icon: FriendsIcon },
      { title: 'Favorite', Icon: FavoriteIcon },
    ];
    setCategoryData(newCategoryData);
  }, []);

  useEffect(() => {
    const newMessagesData = {
      header: {
        title: 'Personal Messages',
        icon: MessagesAddIcon,
      },
      messages: [
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'dima_1411k',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
        {
          title: 'Innnnna_ch',
          icon: FriendsIcon,
        },
      ],
    };
    setMessagesData(newMessagesData);
  }, []);

  useEffect(() => {
    const newProfileData = {
      avatarIcon: FriendsIcon,
      username: 'Predator',
      id: '9722',
    };
    setProfileData(newProfileData);
  }, []);

  return (
    <div className="App">
      <ServersDashboard LogoIcon={LogoIcon} servers={servers} />
      <ServerDashboard
        categoryData={categoryData}
        messagesData={messagesData}
        profileData={profileData}
      />
      <ChatDashboard />
    </div>
  );
};

export default App;
