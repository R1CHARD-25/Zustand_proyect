import { useCart } from "../../store/useCart";
import { CartItem } from "../CartItem/CartItem.jsx";
import styles from "../Cart/styles.module.css";

export const Cart = () => {
    const { cartItems, totalPrice, removeFromCart } = useCart();

    return (
        <div className={styles.cartContainer}>
            <h2 className={"text-cyan-50"}>Carrito | Total: ${totalPrice}</h2>
            <div className={styles.cartItems}>
                {cartItems.length === 0 ? (
                    <p className={"text-cyan-50"}>No hay productos en el carrito.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItems}>
                            <CartItem {...item} />
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
