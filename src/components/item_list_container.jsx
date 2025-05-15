import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import ItemList from './item_list';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      setLoading(true);

      try {
        const itemsCollection = collection(db, 'products');

        const q = categoriaId
          ? query(itemsCollection, where('categoria', '==', categoriaId))
          : itemsCollection;

        const querySnapshot = await getDocs(q);

        const productosFirebase = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(productosFirebase);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoriaId]);

  return (
    <div>
      <h2 className="centered-message">{mensaje}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
