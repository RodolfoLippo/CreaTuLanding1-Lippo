import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const handleAdd = (cantidad) => {
    console.log(`Agregado al carrito: ${cantidad} unidades de ${producto.nombre}`);
    
  };

  return (
    <div className="item-detail">
      <img src={producto.imagen} alt={producto.nombre} width="200" />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: €{producto.precio}</p>

      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
