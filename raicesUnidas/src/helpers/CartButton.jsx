import { useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import '../styles/CartButton.css'

const CartButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    if (location.pathname === "/cart") return null;

    const goToCart = () => {
        navigate("/cart");
    };

    return (
        <button
            className="cart-floating-button"
            onClick={goToCart}
            aria-label="Ir al carrito"
        >
            <FaShoppingCart />
        </button>
    );
};

export default CartButton;
