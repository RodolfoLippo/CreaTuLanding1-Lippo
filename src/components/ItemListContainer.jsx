import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../utils/promesas';
import ItemList from './ItemList';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductosPorCategoria(categoriaId).then(setProductos);
    } else {
      getProductos().then(setProductos);
    }
  }, [categoriaId]);

  return (
    <div>
      <h2 className="centered-message">{mensaje}</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
