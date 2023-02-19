import './category.style.scss';

import { ReactSVG } from 'react-svg';

const Category = ({ data }) => {
  const { title, Icon } = data;

  return (
    <a className="category-item" href="#">
      <ReactSVG wrapper="div" className="category-item__icon" src={Icon} />
      <h3 className="category-item__title">{title}</h3>
    </a>
  );
};

export default Category;
