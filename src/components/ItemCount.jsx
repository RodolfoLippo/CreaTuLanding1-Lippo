import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={decrementar}>-</button>
        <span>{count}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
