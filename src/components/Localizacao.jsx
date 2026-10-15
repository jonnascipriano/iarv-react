export default function Localizacao() {
    return (
        <section className="py-20 px-6 flex flex-col items-center justify-center bg-black relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white mb-12 uppercase font-busorama text-center">
                Localização
            </h2>
            
            {/* Container do Mapa com sombra e borda usando as cores da IARV */}
            <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-cards border-4 border-white relative group">
                
                {/* Elemento decorativo: Badge com o endereço */}
                <div className="absolute top-2 right-2 z-10 bg-white backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-xs transition-transform duration-300 group-hover:-translate-y-1">
                    <h3 className="font-busorama text-tertiary font-bold text-lg mb-1">
                        I.A.R.V Sede
                    </h3>
                    <p className="font-poppins text-xs text-gray-600 leading-relaxed">
                        Venha nos visitar! Estamos prontos para receber você e sua família de braços abertos.
                    </p>
                </div>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.62916402523683!2d-40.263892449148074!3d-3.802873457953989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7eab5dc15b27b5f%3A0xdcdd92fedbfc9aab!2sIgreja%20Apost%C3%B3lica%20Restaurando%20Vidas!5e0!3m2!1spt-BR!2sbr!4v1792098442741!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="500" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    // Filtros Tailwind: Deixa o mapa quente (sepia), altera o matiz (hue-rotate) e satura
                    // Ao passar o mouse (hover), o mapa volta à cor original do Google temporariamente
                    className="w-full aspect-video md:aspect-auto sepia-[.4] hue-rotate-[-15deg] saturate-150 contrast-110 opacity-95 transition-all duration-700 ease-in-out hover:sepia-0 hover:hue-rotate-0 hover:saturate-100 hover:contrast-100 hover:opacity-100"
                ></iframe>
            </div>

            {/* Rodapé informativo abaixo do mapa */}
            <div className="mt-8 flex flex-col items-center text-center font-poppins">
                <a 
                    href="https://maps.app.goo.gl/eXBRECDUr5sz3m4F7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-quarternary text-white font-bold py-3 px-8 rounded-full uppercase text-sm tracking-wider transition-all duration-300 hover:bg-primary hover:shadow-lg hover:-translate-y-1 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Abrir no GPS
                </a>
            </div>
        </section>
    );
}