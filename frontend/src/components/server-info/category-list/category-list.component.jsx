import './category-list.style.scss';

import Category from '../category/category.component.jsx';

const CategoryList = ({ categoryItems }) => {
  return (
    <div className="category-list">
      {categoryItems.map((item, index) => {
        return <Category data={item} key={index} />;
      })}
    </div>
  );
};

export default CategoryList;
