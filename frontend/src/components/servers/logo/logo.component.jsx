import './logo.style.scss';

import { Link } from 'react-router-dom';

const Logo = ({ logoIcon }) => {
  return (
    <div className='logo-container'>
      <Link className='logo-container__link' to='me'>
        <img className='logo-container__icon' alt='Logo Icon' src={logoIcon} />
      </Link>
    </div>
  );
};

export default Logo;
