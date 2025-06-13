import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const manejarSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orden = {
      comprador: { nombre, telefono, email },
      items: carrito.map((item) => ({
        id: item.id,
        titulo: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
      })),
      total: totalCarrito(),
      fecha: serverTimestamp(),
    };

    try {
      const ordenRef = await addDoc(collection(db, "ordenes"), orden);
      setOrderId(ordenRef.id);
      vaciarCarrito();
      setError("");

      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        text: `Tu número de orden es: ${ordenRef.id}`,
      });
    } catch (error) {
      console.error("Error al generar la orden:", error);
      setError("Ocurrió un error al generar la orden. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="centered-message">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div className="formulario-compra">
      <h2>Finalizar Compra</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          pattern="^[0-9]{7,15}$"
          title="Introduce solo números (mínimo 7 dígitos)"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Generando orden..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
