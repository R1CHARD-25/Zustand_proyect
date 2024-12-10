
export default function Add(){

    return(
        <div>
            <div
                className=" add-to-cart-container cursor-pointer transition-all  px-6 py-2 rounded-lg ] hover:brightness-110 hover:-translate-y-[1px] active:brightness-90 active:translate-y-[2px]">
                <button
                        className="overflow-hidden w-[225px] p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 "
                >
                    Añadir al carrito!
                    <span
                        className="absolute w-[250px] h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                    <span
                        className="absolute w-[250px] h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                    <span
                        className="absolute w-[250px] h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                    <span
                        className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">El carrito te espera!</span>
                </button>
            </div>

        </div>
    )
}