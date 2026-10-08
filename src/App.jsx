import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cultos from "./components/Cultos.jsx"
import Contribuicoes from "./components/Contribuicoes.jsx";
import PlanoLeitura from "./components/PlanoLeitura.jsx";
import Footer from "./components/Footer.jsx"
import "./App.css";

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar/>
            <Hero/>
            <Cultos/>
            <Contribuicoes/>
            <PlanoLeitura/>
            <Footer/>
        </main>
    );
}

export default App;
