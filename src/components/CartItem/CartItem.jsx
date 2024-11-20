
import { useCart } from "../../store/useCart";
import styles from "../CartItem/styles.module.css";


export const CartItem = ({ id, img, price, quantity }) => {
    const { removeFromCart } = useCart();

    return (
        <div className={styles.cartItem}>
            <div className={styles.imgContainer}>
                <img src={img} alt={id} />
                <span>{quantity}</span>
            </div>
            <div className={styles.textContainer}>
                <span>Producto {id}</span>
                <p>
                    Precio por unidad: <b>${price}</b>
                </p>
            </div>
            <button onClick={() => removeFromCart(id)}>Remover</button>
        </div>
    );
};
