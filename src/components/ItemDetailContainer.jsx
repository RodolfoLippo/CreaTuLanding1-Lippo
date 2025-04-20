import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoPorId } from '../utils/promesas';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductoPorId(itemId).then(setProducto);
  }, [itemId]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;