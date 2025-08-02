import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import Rituales from "./sections/Rituales";
import Informacion from "./sections/Informacion";
import Constelaciones from "./sections/Constelaciones";
import Consultas from "./sections/Consultas";
import Testimonios from "./sections/Testimonios";
import Contacto from "./sections/Contacto";

function App() {
    return (
        <div className="App">
            <Navbar />

            {/* Secciones scrollables */}
            <section id="inicio"><Home /></section>
            <section id="rituales"><Rituales /></section>
            <section id="informacion"><Informacion /></section>
            <section id="constelaciones"><Constelaciones /></section>
            <section id="consultas"><Consultas /></section>
            <section id="testimonios"><Testimonios /></section>
            <section id="contacto"><Contacto /></section>

            <Footer />
        </div>
    );
}

export default App;
