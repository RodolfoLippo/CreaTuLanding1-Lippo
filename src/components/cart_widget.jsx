import { useContext } from "react";
import { CartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  const total = cantidadTotal();

  return (
    <Link to="/cart" className="cart-widget" style={{ textDecoration: "none", color: "inherit" }}>
      🛒 <span>{total}</span>
    </Link>
  );
};

export default CartWidget;
