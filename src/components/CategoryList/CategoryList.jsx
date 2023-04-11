import { useState } from "react";
import "./CategoryList.css";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={'/category/' + category.path}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>
        {output}
      </ul>
    </div>
  );
}