import Item from "../Item/Item";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function ItemList({ searchTerm, products: initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const filteredProducts = searchTerm
            ? initialProducts.filter(product =>
                product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description?.toLowerCase().includes(searchTerm.toLowerCase())
            )
            : initialProducts;

        setProducts(filteredProducts);
        setLoading(false);
    }, [searchTerm, initialProducts]);

    return (
        <>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="flex flex-wrap justify-center items-center w-full">
                    {products.map((prod) => (
                        <Item {...prod} key={prod.id} />
                    ))}
                </div>
            )}
        </>
    );
}