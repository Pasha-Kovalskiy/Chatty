import { ReactSVG } from 'react-svg';

import './login-icons.style.scss';
import LoginIcon from '../../../img/icons/login-icon.svg';
import SignupIcon from '../../../img/icons/signup-icon.svg';

const LoginIcons = () => {
  return (
    <div className="login-icons">
      <a className="login-icons__link" href="#">
        <ReactSVG className="login-icons__icon" src={LoginIcon} />
      </a>
      <a className="login-icons__link" href="#">
        <ReactSVG className="login-icons__icon" src={SignupIcon} />
      </a>
    </div>
  );
};

export default LoginIcons;
