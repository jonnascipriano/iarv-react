import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";

function App() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar/>
            <Hero/>
        </main>
    );
}

export default App;
