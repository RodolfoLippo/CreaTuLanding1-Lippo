import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [mensaje, setMensaje] = useState("");

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
      setMensaje("");
    } else {
      setMensaje("Has alcanzado el stock máximo.");
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
      setMensaje("");
    } else {
      setMensaje("Mínimo una unidad.");
    }
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
      </div>
      {mensaje && <p style={{ color: "red" }}>{mensaje}</p>}
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
