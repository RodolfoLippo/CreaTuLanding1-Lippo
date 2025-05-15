import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/item_list_container";
import ItemDetailContainer from "./components/item_detail_container";
import Contacto from "./components/contacto";
import Cart from "./components/cart";
import CheckoutForm from "./components/check_out_form";
import NotFound from "./components/not_found";
import NavBar from "./components/NavBar";

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
