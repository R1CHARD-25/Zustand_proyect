import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo_nav from '../../../public/logo3.png';
import Direcciones from '../Estilo_direcciones/Estilo_direcciones.jsx';
import Navbar from "../Navbar/Navbar.jsx";
import Fi from "@/components/fi/FiShoppingCart.jsx";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[#16505c] text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-10 h-10">
                        <img src={Logo_nav} alt="Logo" className="h-10 w-25" />
                    </div>
                    <div>
                        <Navbar/>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-0">
                            <Link to="/" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Inicio" /></Link>
                            <Link to="/Category/equipamiento" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Equipamiento" /></Link>
                            <Link to="/Category/zapato" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Calzado" /></Link>
                            <Link to="/Category/parca" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Vestimenta" /></Link>
                            <Link to="/Nosotros" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"> <Direcciones name="ayuda" /> </Link>
                            <Link to="/Cart"
                                  className=" text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium">
                                <div>
                                    <Fi/>
                                </div>

                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 text-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/"
                          className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones
                        name="Inicio"/></Link>
                    <Link to="/Category/equipamiento" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Equipamiento" /></Link>
                    <Link to="/Category/zapato" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Calzado" /></Link>
                    <Link to="/Category/parca" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Vestimenta" /></Link>
                    <Link to="/Nosotros" className="text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"> <Direcciones name="ayuda" /> </Link>
                    <Link to="/Cart" className=" text-gray-300 hover:text-white px-1 py-1 rounded-md text-sm font-medium"><Direcciones name="Carrito" /></Link>
                </div>
            )}
        </header>
    );
}

export default Header;
