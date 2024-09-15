import "./CategoryCard.scss";
import { Link } from "react-router-dom";
const CategoryCard = ({ title }) => {
  return (
    <div className="category">
      <div className="category__card">
        <div className="category__menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <h3 className="category__percentage">78%</h3>
      </div>

      <Link className="category__title">{title}</Link>
    </div>
  );
};

export default CategoryCard;
