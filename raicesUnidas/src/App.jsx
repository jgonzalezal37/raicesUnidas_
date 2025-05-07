import "./App.css"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Rituales from './pages/Rituales'
//prueba
function App() {
    return (
        <div className="App">

            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={Home} />
                </Routes>
                <Home />
                <Rituales />
                <Footer />
            </Router>


        </div>
    );
}

export default App;