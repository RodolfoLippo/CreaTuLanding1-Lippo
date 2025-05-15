import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Bienvenido a CasAnt" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
