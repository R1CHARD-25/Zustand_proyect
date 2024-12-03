import { useState } from "react";
import ItemList from "@/components/ItemList/ItemList.jsx";
import Logo_nav from "../../../public/pajaro.gif";
import Logo from "../../../public/montañaspng.png";

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-center py-10">
                <img id="logo" src={Logo} alt="Logo" width="400" height="400" />
            </div>

            <div className="text-[30px] text-white">

                <marquee behavior="" direction="right">

                    <div
                        className="relative inline-block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 transition duration-100 transform ${
                                isHovered ? "opacity-100 translate-y-0" : "translate-y-2"
                            }`}
                        >
                            <div className="bg-slate-800  text-white rounded-lg px-1 py-0">
                                <p className="font-bold text-xl mb-1 cursor-pointer">Hola bienvenido! 👋</p>

                            </div>
                        </div>
                    </div>


                    <img
                        src={Logo_nav}
                        alt="Logo"
                        className="h-[100px] w-[90px] inline-block animate-marquee "
                    />
                </marquee>
            </div>

            <h2 className="text-white text-3xl text-center font-bold">¿QUÉ HAY POR AQUÍ?</h2>
            <p className="text-xl text-white text-center">
                Aquí encontrarás todo lo necesario para tus excursiones, para esos días fríos o cálidos donde necesites
                los productos que nosotros podemos ofrecer.
            </p>

            <ItemList />
        </div>
    );
}
