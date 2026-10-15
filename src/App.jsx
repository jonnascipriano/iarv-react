import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cultos from "./components/Cultos.jsx"
import Contribuicoes from "./components/Contribuicoes.jsx";
import PlanoLeitura from "./components/PlanoLeitura.jsx";
import Programacao from "./components/pages/Programacao.jsx";
import Footer from "./components/Footer.jsx"
import "./App.css";

function PaginaInicial(){
    return (
        <main className="flex-1">
            <Hero/>
            <Cultos/>
            <Contribuicoes/>
            <PlanoLeitura/>
        </main>
    )
}

export default function App(){
    return(
        <HashRouter>
            <div className="min-h-screen flex flex-col bg-bg2">
                <Navbar/>

                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<PaginaInicial/>}/>
                        <Route path="/programacao" element={<Programacao/>}/>
                    </Routes>
                </div>

                <Footer/>
            </div>
        </HashRouter>
    )
}