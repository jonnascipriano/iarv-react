import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cultos from "./components/Cultos.jsx"
import Contribuicoes from "./components/Contribuicoes.jsx";
import PlanoLeitura from "./components/PlanoLeitura.jsx";
import Footer from "./components/Footer.jsx"
import "./App.css";
import Localizacao from "./components/Localizacao.jsx";
import Galeria from "./components/Galeria.jsx";
import Contatos from "./components/Contatos.jsx";

function PaginaInicial(){
    return (
        <section className="flex-1">
            <Hero/>
            <Cultos/>
            <PlanoLeitura/>
            <Contribuicoes/>
            <Localizacao/>
        </section>
    )
}

export default function App(){
    return(
        <HashRouter>
            <main className="min-h-screen flex flex-col bg-bg2">
                <Navbar/>

                <section className="flex-1">
                    <Routes>
                        <Route path="/" element={<PaginaInicial/>}/>
                        <Route path="/galeria" element={<Galeria/>}/>
                        <Route path="/contatos" element={<Contatos/>}/>
                    </Routes>
                </section>


                <Footer/>
            </main>
        </HashRouter>
    )
}