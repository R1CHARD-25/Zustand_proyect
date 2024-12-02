import { Link } from "react-router-dom";
import LikeSwitch from "@/components/Switches/LikeSwitch.jsx";

export default function Item({ id, name, price, img }) {
    return (
        <div className="flex flex-col items-center my-[10px] m-2 p-2">

            <div className="group flex flex-col justify-start items-start gap-2 w-80 h-[500px] duration-500 relative rounded-lg p-4 bg-[white] hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
               <Link to={`/products/${id}`}>
                    <div>
                <p
                        className="flex flex-col items-center font-bold my-[15px] absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-5 w-40 h-10 rounded-lg bg-gray-200"

                    >${price}</p>
            </div>
            </Link>


                <Link
                    to={`/products/${id}`}>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{name}</h2>
                    <img
                        src={img}
                        alt="Imagen Producto"
                    />
                </Link>
            <div className="hover: mt-6 rounded p-2 px-2 w-[11px] h-[11px]">
                 <button>
                    <LikeSwitch/>
                </button>
            </div>
            </div>
        </div>
    );
}