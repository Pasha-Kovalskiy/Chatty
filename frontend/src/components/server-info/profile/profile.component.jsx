import { ReactSVG } from 'react-svg';
import './profile.style.scss';

import MicrophoneIcon from '../../../img/icons/microphone-icon.svg';
import HeadphonesIcon from '../../../img/icons/headphones-icon.svg';
import SettingsIcon from '../../../img/icons/settings-icon.svg';

const Profile = ({ data }) => {
  const { avatarIcon = '', username = '', id = '' } = data;
  return (
    <div className="profile">
      <div className="profile__info" tabIndex={0}>
        <ReactSVG className="profile__avatar" src={avatarIcon} />
        <div className="profile__name-info">
          <span className="profile__username">{username}</span>
          <small className="profile__id">#{id}</small>
        </div>
      </div>
      <div className="profile__icons">
        <ReactSVG className="profile__icon" src={MicrophoneIcon} />
        <ReactSVG className="profile__icon" src={HeadphonesIcon} />
        <ReactSVG className="profile__icon" src={SettingsIcon} />
      </div>
    </div>
  );
};

export default Profile;
