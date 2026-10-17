export default function Contatos() {
    return (
        <section className="py-16 bg-bg2 flex flex-col items-center w-full">
            
            {/* Títulos com as classes de estilo restauradas */}
            <div className="flex flex-col items-center text-center mb-12 px-4">
                <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-tertiary mb-4 uppercase font-busorama">
                    Fale Conosco
                </h1>
                <p className="font-poppins text-gray-600 max-w-xl">
                    Queremos ouvir você! Envie uma mensagem ou acompanhe-nos nas redes sociais.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl mx-auto px-6 items-stretch justify-center">
            
                <form className="flex-[2] flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-2xl w-full justify-around">
                    <h2 className="text-xl font-bold font-busorama text-tertiary mb-2">Formulário de Envio</h2>

                    <input
                        className="border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm font-poppins"
                        type="text"
                        placeholder="Seu nome"
                    />

                    <input
                        className="border border-gray-300 rounded-xl p-2.5 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm font-poppins"
                        type="email"
                        placeholder="E-mail"
                    />

                    <textarea
                        className="border border-gray-300 rounded-xl p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm font-poppins"
                        placeholder="Sua mensagem..."
                    />

                    <button className="bg-primary hover:bg-quarternary text-white font-bold py-2.5 rounded-xl transition-colors text-sm uppercase tracking-wider font-poppins">
                        Enviar Mensagem
                    </button>
                </form>

                <div className="flex-1 flex flex-col gap-6 w-full">

                    <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-2xl w-full">
                        <h2 className="text-lg font-bold font-busorama text-tertiary">Nossos Contatos</h2>
                        <div className="flex flex-col gap-4 text-sm text-gray-600 font-poppins leading-relaxed">
                            <span>📞 (88) 99270-1458</span>
                            <span>✉️ pastorjunior2601@gmail.com</span>
                            <span>📍 R. Laurindo Bonfim da Silva, 268<br/>Centro, Forquilha - CE</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-2xl w-full">
                        <h2 className="text-lg font-bold font-busorama text-tertiary">Redes Sociais</h2>
                        <div className="flex flex-col gap-4 text-sm font-poppins font-bold text-primary">

                            <a target="_blank" href="https://www.instagram.com/iarvforquilha/" className="hover:text-quarternary transition-colors w-fit">Instagram - Sede</a>

                            <a target="_blank" href="https://www.facebook.com/iarv.forquilha?locale=pt_BR" className="hover:text-quarternary transition-colors w-fit">Facebook - Sede</a>

                            <a target="_blank" href="https://www.instagram.com/iarv_varzea_da_cobra/" className="hover:text-quarternary transition-colors w-fit">Instagram - Várzea da Cobra</a>

                            <a target="_blank" href="https://www.facebook.com/profile.php?id=100006982936819&locale=pt_BR" className="hover:text-quarternary transition-colors w-fit">Facebook - Pr. Júnior Alves</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}