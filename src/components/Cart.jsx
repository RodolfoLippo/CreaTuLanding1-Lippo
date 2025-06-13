import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Swal from "sweetalert2";

const Cart = () => {
  const { carrito, vaciarCarrito, totalCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Vaciado", "Tu carrito ha sido vaciado", "success");
      }
    });
  };

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
      <button onClick={handleVaciar}>Vaciar carrito</button>
      <Link to="/checkout"><button>Finalizar compra</button></Link>
    </div>
  );
};

export default Cart;
