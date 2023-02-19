import './server-dashboard.style.scss';

import Search from '../search/search.component.jsx';
import CategoryList from '../category-list/category-list.component.jsx';
import MessagesDashboard from '../messages-dashboard/messages-dashboard.component.jsx';
import Profile from '../profile/profile.component.jsx';

const ServerDashboard = ({ categoryData, messagesData, profileData }) => {
  return (
    <div className="server-dashboard">
      <Search />
      <CategoryList categoryItems={categoryData} />
      <MessagesDashboard data={messagesData} />
      <Profile data={profileData} />
    </div>
  );
};

export default ServerDashboard;
