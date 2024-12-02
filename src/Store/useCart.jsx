import { create } from 'zustand';
import { products } from "../data/asyncMock";

export const useCart = create((set, get) => ({
    products: products,
    cartItems: [],
    totalPrice: 0,

    addToCart: (productId, quantity) => {
        set(() => {
            const product = get().products.find((item) => item.id === productId);
            if (product && product.stock >= quantity) {
                const cartItemFound = get().cartItems.find((cartItem) => cartItem.id === productId);
                if (cartItemFound) {
                    return {
                        cartItems: get().cartItems.map((cartItem) =>
                            cartItem.id === productId
                                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                                : cartItem
                        ),
                        totalPrice: get().totalPrice + product.price * quantity,
                    };
                } else {
                    return {
                        cartItems: [...get().cartItems, { ...product, quantity }],
                        totalPrice: get().totalPrice + product.price * quantity,
                    };
                }
            }
        });
    },

    removeFromCart: (productId) => {
        set((state) => {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === productId);
            if (itemIndex !== -1) {
                const updatedCartItems = [...state.cartItems];
                const itemToRemove = updatedCartItems[itemIndex];

                if (itemToRemove.quantity > 1) {
                    updatedCartItems[itemIndex] = {
                        ...itemToRemove,
                        quantity: itemToRemove.quantity - 1,
                    };
                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.totalPrice - itemToRemove.price,
                    };
                } else {
                    updatedCartItems.splice(itemIndex, 1);
                    return {
                        cartItems: updatedCartItems,
                        totalPrice: state.totalPrice - itemToRemove.price,
                    };
                }
            }
            return state;
        });
    },


    clearCart: () => {
        set({
            cartItems: [],
            totalPrice: 0,
        });
    },
}));
