import "../Styles/ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="centered-message">
      <h2>{mensaje}</h2>
    </div>
  );
};
export default ItemListContainer;