import { useEffect, useState } from "react";
import "./CategoryList.css";
import { getDocs } from "firebase/firestore";
import { categoryCollection } from "../../firebase";
import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  // выполнить эту функцию только один раз
  useEffect(() => {
    // получить категории из списка категорий
    getDocs(categoryCollection)
      .then(snapshot => {
        // категории будут храниться в snapshot.docs

        // создать массив для категорий
        const newCategories = [];
        // заполнить массив данными из списка категорий
        snapshot.docs.forEach(doc => { // doc = категория
          const category = doc.data();
          category.id = doc.id;

          newCategories.push(category);
        });
        // задать новый массив как состояние комапо
        setCategories(newCategories);
      })
  }, []);

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