import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  if (!producto) return null;

  return (
    <div className="item-card">
      <img src={producto.imagen} alt={producto.nombre} width="150" />
      <h3>{producto.nombre}</h3>
      <p>Precio: €{producto.precio}</p>
      <Link to={`/item/${producto.id}`}>Ver más</Link>
    </div>
  );
};

export default Item;