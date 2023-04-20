import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import ProductList from "../components/ProductList/ProductList";
import NotFound from "./NotFound";

export default function Category() {
  // деструктизацтия
  const { params } = useMatch("/category/:path");
  const { categories } = useContext(AppContext);
  // простой метод
  // const match = useMatch("/category/:path");
  // match.params.path;

  // найти категорию где путь категории совпадает с путем в браузере
  const category = categories.find(
    category => params.path === category.path,
    /*
    function(category) {
      if (params.path === category.path) {
        return true;
      }
      else {
        return false;
      }
    }
    */
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <div className="Category">
      <h1>{category ? category.name : "Loading..."}</h1>
      <ProductList category={category} />
    </div>
  );
}