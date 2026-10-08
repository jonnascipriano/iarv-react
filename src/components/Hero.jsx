import Botao from "./Botao";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-80px)] text-white bg-linear-to-r to-primary from-secondary flex flex-col items-center justify-center text-center">
            <div className="bg-neutral-900 p-12 rounded-2xl border-2 border-white sm:w-200 shadow-cards">
                <h1>Bem-vindo a nossa casa</h1>
                <p className="mb-8 text-lg font-quarternary italic">Um lugar de adoração e comunhão.</p>
                <a href=""><Botao>Horário dos cultos</Botao></a>
            </div>
        </section>
    );
}
