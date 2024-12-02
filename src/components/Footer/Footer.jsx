
import React from 'react';

import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#1D2929] text-white text-center py-4 w-full relative">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center">
                <p>&copy; que pasa capo¿tdo bien?</p>
                <div className="mt-2">
                    <a href="#privacy" className="text-gray-400 mx-2 hover:text-white">Privacidad</a>
                    <Link to="/Terms" className="text-gray-400 mx-2 hover:text-white">Términos de uso</Link>
                    <a href="#contact" className="text-gray-400 mx-2 hover:text-white">Contacto</a>
                </div>
                <div className="mt-2">
                    <a href="#privacy" className="text-gray-400 mx-2 hover:text-white flex items-center">
                        <BsTwitterX className="mr-1" /> Twitter
                    </a>
                    <a href="#terms" className="text-gray-400 mx-2 hover:text-white flex items-center">
                        <FaInstagram className="mr-1" /> Instagram
                    </a>
                    <a href="#contact" className="text-gray-400 mx-2 hover:text-white flex items-center">
                        <FaFacebookSquare className="mr-1" /> Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
