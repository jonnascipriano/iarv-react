import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cultos from "./components/Cultos.jsx"
import "./App.css";

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar/>
            <Hero/>
            <Cultos/>
        </main>
    );
}

export default App;
