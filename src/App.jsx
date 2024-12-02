import './App.css';
import Header_componente from "./components/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home/Home.jsx";
import Equipamiento from "./components/Equipamiento/Equipamiento.jsx";
import Calzado from "./components/Calzado/Calzado.jsx";
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx";
import Carpas from "./components/Carpas/Carpas.jsx";
import Nosotros from "@/components/Nosotros/Nosotros.jsx";
import ProductsCategory from './components/Category/Category.jsx';
import Terms from './components/Terms/Terms.jsx';
import { Cart } from "@/components/Cart/Cart.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header_componente />

                <div className="bg-Mountain bg-fixed bg-cover bg-center min-h-screen flex flex-col">
                    <div className="flex-grow z-10 relative">
                    </div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/equipamiento" element={<Equipamiento />} />
                        <Route path="/Nosotros" element={<Nosotros />} />
                        <Route path="/Terms" element={<Terms />} />
                        <Route path="/Calzado" element={<Calzado />} />
                        <Route path="/Carpas" element={<Carpas />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route path='/products/:productId' element={<ItemDetail />} />
                        <Route path='/category/:categoryId' element={<ProductsCategory />} />
                        <Route path='/products_equipamiento/:productId' element={<ItemDetail />} />
                    </Routes>
                </div>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
