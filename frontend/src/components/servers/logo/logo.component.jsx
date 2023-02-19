import './logo.style.scss';

const Logo = ({ logoIcon }) => {
  return (
    <div className="logo-container">
      <a className="logo-container__link" href="#">
        <img className="logo-container__icon" alt="Logo Icon" src={logoIcon} />
      </a>
    </div>
  );
};

export default Logo;
