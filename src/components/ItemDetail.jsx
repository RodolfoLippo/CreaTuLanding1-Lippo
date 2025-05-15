import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    agregarAlCarrito(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} width="200" />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: €{producto.precio}</p>

      {!agregado ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p style={{ color: "green" }}>Producto agregado al carrito 🛒</p>
      )}
    </div>
  );
};

export default ItemDetail;
