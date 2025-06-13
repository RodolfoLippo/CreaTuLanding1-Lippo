import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const itemExistente = carrito.find((item) => item.id === producto.id);

    if (itemExistente) {
      const carritoActualizado = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalCarrito = () => {
    return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  };

  const cantidadTotal = () => {
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito, // ✅ Esta línea habilita modificar directamente el carrito desde otros componentes
        agregarAlCarrito,
        vaciarCarrito,
        totalCarrito,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
