import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import '../styles/HomeButton.css'

const HomeButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    if (location.pathname !== "/cart") return null;

    const goHome = () => {
        navigate("/");
    };

    return (
        <button
            className="home-floating-button"
            onClick={goHome}
            aria-label="Volver al inicio"
        >
            <FaHome />
        </button>
    );
};

export default HomeButton;
