

export const CartItem = ({ id, img, price, quantity,name }) => {


    return (
        <div className="justify-items-center flex items-center gap-6 p-4 border-b border-gray-700">

            <div className="relative">
                <img src={img} alt={id} className="w-12 h-12 object-cover rounded-md border border-gray-700" />
                <span className="absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-red-600 text-white font-bold rounded-full -mt-2 -mr-2">
                    {quantity}
                </span>
            </div>
            <div className="flex flex-col items-start">
                <span className="font-bold text-white"> {name}</span>
                <p className="text-xl text-gray-400 font-normal">
                    Precio por unidad: <b className="text-white font-bold">${price}</b>
                </p>
            </div>

        </div>
    );
};
