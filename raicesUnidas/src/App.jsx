import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./sections/Home";
import Rituales from "./sections/Rituales";
import Informacion from "./sections/Informacion";
import Constelaciones from "./sections/Constelaciones";
import Consultas from "./sections/Consultas";
import Testimonios from "./sections/Testimonios";
import Contacto from "./sections/Contacto";
import Cart from "./pages/Cart.jsx";
import CartButton from './helpers/CartButton.jsx';
import HomeButton from './helpers/HomeButton.jsx';
function App() {
    return (
        <div className="App">
            <Navbar />

            <Routes>
                <Route path="/" element={
                    <>
                        {/* Página principal con todas las secciones scrollables */}
                        <section id="inicio"><Home /></section>
                        <section id="informacion"><Informacion /></section>
                        <section id="constelaciones"><Constelaciones /></section>
                        <section id="rituales"><Rituales /></section>
                        <section id="consultas"><Consultas /></section>
                        <section id="testimonios"><Testimonios /></section>
                        <section id="contacto"><Contacto /></section>
                    </>
                } />
                <Route path="/cart" element={<Cart />} />
                {/* Otras rutas si quieres */}
            </Routes>
            <CartButton />
            <HomeButton />
            <Footer />

        </div>
    );
}

export default App;
