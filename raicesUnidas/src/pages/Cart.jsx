import React from 'react';
import { useCart } from '../context/cartContext';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    // Calcular total
    console.log("Cart items:", cartItems);

    const totalPrice = cartItems.reduce((total, item) => {
        if (!item || typeof item.quantity !== 'number') return total;

        // Extraer número del string price, quitando cualquier carácter no numérico o separador
        const priceNumber = Number(item.price.toString().replace(/[^0-9.,]/g, '').replace(',', '.'));

        if (isNaN(priceNumber)) return total; // si no es número válido, ignorar

        return total + priceNumber * item.quantity;
    }, 0);

    console.log(totalPrice);


    return (
        <section className="cart">
            <h1>Tu carrito</h1>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems
                            .filter(item => item)
                            .map((item) => (
                                <div key={item.id} className="cart-item-card">
                                    <div className="cart-item-info">
                                        <h3>{item.name}</h3>
                                        <p>Precio: <span className="price">{item.price}</span></p>
                                        <p>Cantidad: <span className="quantity">{item.quantity}</span></p>
                                    </div>
                                    <button
                                        className="btn-remove"
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label={`Eliminar ${item.name} del carrito`}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className="cart-total">
                        <strong>Total: {totalPrice.toFixed(2)} €</strong>
                    </div>
                    <button onClick={clearCart} className="clear-btn">Vaciar carrito</button>
                    {/* Aquí botón para ir a tienda o finalizar compra */}
                </>
            )}
        </section>
    );
};

export default Cart;
