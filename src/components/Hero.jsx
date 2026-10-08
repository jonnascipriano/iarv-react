function Hero(){
    return(
        <section 
            className="
            text-white
            bg-gradient-to-r to-primary from-secondary 
            min-h-screen
            flex flex-col items-center justify-center
            ">


            <div className="bg-neutral-900 p-12 rounded-2xl border-2 border-white">
                <h1 className="text-5xl font-bold mb-4">Bem-vindo à IARV</h1>
                <p className="mb-8 text-lg">Um lugar de adoração e comunhão.</p>
                <button className="bg-quarternary px-6 py-2 rounded-full font-bold">Horários dos Cultos</button>
            </div>
        </section>
    )
}

export default Hero;