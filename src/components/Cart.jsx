import { useContext } from "react";
import { CartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "./Cart_item";

const Cart = () => {
  const { carrito, vaciarCarrito, totalCarrito } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="centered-message">
        <h2>Tu carrito está vacío.</h2>
        <Link to="/"><button>Volver al inicio</button></Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <h3>Total: €{totalCarrito()}</h3>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link to="/checkout"><button>Finalizar compra</button></Link>
    </div>
  );
};

export default Cart;
