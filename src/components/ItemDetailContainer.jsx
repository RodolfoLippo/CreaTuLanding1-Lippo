import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'products', itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("Producto no encontrado");
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [itemId]);

  if (loading) return <p className="centered-message">Cargando producto...</p>;

  return (
    <div>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <p className="centered-message">Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
