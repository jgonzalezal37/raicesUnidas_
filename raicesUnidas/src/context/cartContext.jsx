import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
const API_URL = 'http://localhost:3001/cart'; // Asegúrate de que el backend esté corriendo

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Al cargar la app, obtenemos el carrito del backend
    useEffect(() => {
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error al obtener carrito');
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.error('Error al cargar el carrito:', error);
        }
    };

    const addToCart = async (item) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item)
            });
            if (!response.ok) throw new Error('Error al añadir al carrito');
            // En lugar de añadir localmente, reconsulta todo el carrito:
            await fetchCartItems();
        } catch (err) {
            console.error('Error al añadir al carrito:', err);
        }
    };

    const removeFromCart = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error al eliminar del carrito');
            await fetchCartItems();
        } catch (error) {
            console.error('Error al eliminar del carrito:', error);
        }
    };

    const clearCart = async () => {
        try {
            const response = await fetch(API_URL, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Error al vaciar el carrito');
            await fetchCartItems();
        } catch (error) {
            console.error('Error al vaciar el carrito:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado para acceder al carrito fácilmente
export const useCart = () => useContext(CartContext);
