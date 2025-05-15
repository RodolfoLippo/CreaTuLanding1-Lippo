import Item from "./item";
import "../Styles/ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="item-list">
      {productos.map((p) => (
        <Item key={p.id} producto={p} />
      ))}
    </div>
  );
};

export default ItemList;
