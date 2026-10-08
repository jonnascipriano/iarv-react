function Hero() {
    return (
        <section
            className="
                text-white
                bg-linear-to-r to-primary from-secondary 
                flex-1
                flex flex-col items-center justify-center
                text-center
                "
        >
            <div className="bg-neutral-900 p-12 rounded-2xl border-2 border-white sm:w-200 shadow-cards">
                <h1>Bem-vindo a nossa casa</h1>
                <p className="mb-8 text-lg font-quarternary italic">Um lugar de adoração e comunhão.</p>
                <button className="bg-quarternary px-6 py-2 rounded-full font-bold">Horários dos Cultos</button>
            </div>
        </section>
    );
}

export default Hero;
