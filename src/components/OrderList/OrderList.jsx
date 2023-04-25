import { useContext } from "react";
import { AppContext } from "../../App";
import "./OrderList.css";

export default function OrderList() {
  const { orders, products } = useContext(AppContext);

  if (!orders.length || !products.length) {
    return "No orders found.";
  }

  const output = orders.map(order => {
    const cart = Object.keys(order.cart).map(productId => {
      const product = products.find(product => product.id === productId);
      if (!product) {
        return "Product not found.";
      }

      return (
        <div>
          {product.name}: {order.cart[product.id]} X {product.price} som = {order.cart[product.id] * product.price} som
        </div>
      );
    });

    return (
      <div className="Order">
        <div><strong>Name</strong>: {order.name}</div>
        <div><strong>Phone</strong>: {order.phone}</div>
        <div><strong>Address</strong>: {order.address}</div>
        <div><strong>Cart</strong>: {cart}</div>
      </div>
    );
  });

  return (
    <div className="OrderList">
      {output}
    </div>
  );
}