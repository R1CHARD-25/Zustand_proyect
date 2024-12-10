import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';
import Loading from '../Loading/Loading.jsx';
import {useCart} from "@/store/useCart.jsx";
import Add from "@/components/Add/Add.jsx";

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product.id, quantity);
    };

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    // ESTADO PARA LA CANTIDAD
    const [quantity, setQuantity] = useState(1);

    // DOS FUNCIONES PARA INCREMENTAR Y DECREMENTAR
    const decrementQuantity = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1)
        }
    }

    const incrementQuantity = () => {
        if(quantity < product.stock){
            setQuantity(quantity + 1)
        }
    }

    if (loading) {
        return <div className='container mx-auto max-w-[1170px]'><Loading /></div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='container mx-auto max-w-[900px]'>

            <div className="product-card rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-black bg-opacity-30 backdrop-blur-lg flex flex-col items-center justify-center gap-3 transition-all duration-300 group">

                <div className="para uppercase text-center leading-none">
                    <p className="font-bold text-lg -mb-5 tracking-wider text-gray-500">
                        New Product
                    </p>
                    <p className="font-bold text-2xl tracking-wider text-[#e3d6c1]">
                        {product.name}
                    </p>
                </div>


                <div className="w-[300px] aspect-square relative">
                    <img
                        src={product.img}
                        alt="Imagen del producto"
                        className="w-full rounded-[20px] transition-all duration-300 after:absolute after:h-1 after:w-full after:opacity-0 after:top-8 after:left-0 group-hover:after:opacity-100 group-hover:after:w-full group-hover:after:transition-all group-hover:after:duration-300 group-hover:after:origin-right group-hover:after:-translate-x-1/2 group-hover:translate-x-1/2"
                    />
                </div>


                <p className="text-white font-semibold text-xl uppercase opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                    Descripcion   ↲
                </p>

                <li className="inline-flex gap-2 items-center justify-center opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
                    <svg className="stroke-[#495c48]" stroke="#000000" fill="none" viewBox="0 0 24 24" height="10" width="10">
                    </svg>
                    <p className="rounded bg-black bg-opacity-50 backdrop-blur-lg text-sm font-semibold text-white">{product.despcription}</p>
                </li>

                <p className='text-white text-[20px] my-[20px]'>Stock: {product.stock}</p>

                <div className='flex'>
                    <button onClick={decrementQuantity} className="cursor-pointer transition-all bg-green-900 text-white px-6 py-2 rounded-lg border-green-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">-</button>
                    <p className='text-2xl text-white text-[20px] px-[10px]'>{quantity}</p>
                    <button onClick={incrementQuantity} className="cursor-pointer transition-all bg-green-900 text-white px-6 py-2 rounded-lg border-green-700 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">+</button>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 pt-6">
                    <p className="text-2xl font-semibold text-[#495c48]">Precio: ${product.price}</p>
                </div>

                <div>
                    <button onClick={handleAddToCart}>
                        <Add/>
                    </button>
                </div>
            </div>
        </div>
    );
}
