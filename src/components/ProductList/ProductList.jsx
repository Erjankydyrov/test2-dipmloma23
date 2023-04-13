import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map(product => (
    <div className="Product" key={product.id}>
      <img src={product.picture} alt={product.name} />
      <Link to={"/product/" + product.path}>
        {product.name}
      </Link>
      <span>{product.price} som</span>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
    </div>
  );
}