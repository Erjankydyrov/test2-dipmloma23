import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  const productIds = Object.keys(cart);
  const output = products
    .filter(product => productIds.includes(product.id))
    .map(product => (
      <div className="CartItem">
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.slug}>
          {product.name}
        </Link>
        <span>{cart[product.id]} items</span>
        <span>{product.price * cart[product.id]} som</span>
      </div>
    ));

  return (
    <div className="CartList">
      {output}
    </div>
  )
}