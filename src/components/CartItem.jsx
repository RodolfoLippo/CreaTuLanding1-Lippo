import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarItem = () => {
    setCarrito(carrito.filter((i) => i.id !== item.id));
  };

  const incrementar = () => {
    const actualizado = carrito.map((i) =>
      i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
    );
    setCarrito(actualizado);
  };

  const decrementar = () => {
    if (item.cantidad > 1) {
      const actualizado = carrito.map((i) =>
        i.id === item.id ? { ...i, cantidad: i.cantidad - 1 } : i
      );
      setCarrito(actualizado);
    }
  };

  return (
    <li className="cart-item">
      <img
        src={item.imagen || "https://via.placeholder.com/80"}
        alt={item.nombre}
        width={80}
      />
      <div>
        <h4>{item.nombre}</h4>
        <p>Precio: €{item.precio}</p>
        <p>Cantidad: {item.cantidad}</p>
        <p>Subtotal: €{item.precio * item.cantidad}</p>
        <div>
          <button onClick={decrementar}>-</button>
          <button onClick={incrementar}>+</button>
          <button onClick={eliminarItem}>Eliminar</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
