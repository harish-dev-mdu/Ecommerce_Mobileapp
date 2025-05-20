import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (item) => {
        setCartItems(prevItems =>
            prevItems.filter(cartItem => cartItem.id !== item.id)
        );
    };

    const updateItemQuantity = (id, quantity) => {
        if (quantity < 1) {
            // Optionally, you can remove the item if the quantity is less than 1
            removeFromCart(cartItems.find(item => item.id === id));
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const toggleWishlist = (item) => {
        setWishlistItems(prevItems => {
            if (prevItems.some(wishlistItem => wishlistItem.id === item.id)) {
                return prevItems.filter(wishlistItem => wishlistItem.id !== item.id);
            }
            return [...prevItems, item];
        });
    };

    const removeFromWishlist = (item) => {
        setWishlistItems(prevItems =>
            prevItems.filter(wishlistItem => wishlistItem.id !== item.id)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, wishlistItems, toggleWishlist, removeFromWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
