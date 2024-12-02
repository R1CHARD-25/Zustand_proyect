
import { useCart } from "@/store/useCart";
import { ProductCard } from "../ProductCart/ProductCart.jsx";
import styles from "../ProductList/styles.module.css";


export const ProductList = () => {
    const { products } = useCart();

    return (
        <div className={styles.productListContainer}>
            <h2>Productos</h2>
            <div className={styles.products}>

                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
