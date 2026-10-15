    const escalaQuarta = [
        { semana: 1, abertura: "Pra. Juliana", ministracao: "Pr. Jáder"},
        { semana: 2, abertura: "Ob. Fernanda", ministracao: "Diac. Alexandre"},
        { semana: 3, abertura: "Ob. Aninha", ministracao: "Pb. José Carlos"},
        { semana: 4, abertura: "Ir. Marilene", ministracao: "Diac. Angelita"},
        { semana: 5, abertura: "Pra. Juliana", ministracao: "Pr. Jáder"},
    ]

    const escalaDomingo = [
        { semana: 1, abertura: "Pr. Jáder", ministracao: "Pr. Júnior Alves"},
        { semana: 2, abertura: "Diac. Alexandre", ministracao: "Pr. Júnior Alves"},
        { semana: 3, abertura: "Pb. José Carlos", ministracao: "Pr. Júnior Alves"},
        { semana: 4, abertura: "Ob. Paulinho", ministracao: "Pr. Jáder"},
        { semana: 5, abertura: "Pr. Jáder", ministracao: "Diac. Alexandre"},
    ]

    function getIndiceSemana(){

        const hoje = new Date();
        const diaDaSemana = hoje.getDay();

        const diffParaSegunda = diaDaSemana === 0 ? -6 : 1 - diaDaSemana
        const segundaFeira = new Date(hoje)
        segundaFeira.setDate(hoje.getDate() + diffParaSegunda)

        const diaDoMesSegunda = segundaFeira.getDate();
        let indice = Math.floor((diaDoMesSegunda - 1) / 7)

        if(indice < 0) indice = 0;
        if(indice > 4) indice = 4;

        return indice;
    }

    const indiceAtual = getIndiceSemana()

    const proxQuarta = escalaQuarta[indiceAtual]
    const proxDomingo = escalaDomingo[indiceAtual]


export default function Cultos(){

    return (
            <section className="bg-black py-16 px-6 flex flex-col items-center justify-center">
                <h1 className="md:text-4xl text-white font-bold tracking-widest mb-15">
                    Programação Semanal
                </h1>

                <div className="flex flex-wrap items-stretch justify-center gap-8 max-w-6xl w-full">

                    <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-90 border-t-4">
                        <h2 className="text-xl font-bold text-tertiary font-primary uppercase tracking-wider mb-1">
                            Quarta-feira
                        </h2>
                        <p className="text-sm text-gray-500 font-tertiary mb-6">Culto de Oração • 19h</p>

                        <div className="w-full bg-bg2 p-4 rounded-2xl flex flex-col gap-3 font-tertiary text-sm">
                            <p className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase">Abertura</span>
                                <span className="font-bold text-quarternary">{proxQuarta.abertura}</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase">Ministração</span>
                                <span className="font-bold text-quarternary">{proxQuarta.ministracao}</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-90 border-t-4">
                        <h2 className="text-xl font-bold text-tertiary font-primary uppercase tracking-wider mb-1">
                            Sexta-feira
                        </h2>
                        <p className="text-sm text-gray-500 font-tertiary mb-6">Culto de Libertação • 19h</p>

                        <div className="w-full bg-bg2 p-4 rounded-2xl flex flex-col gap-3 font-tertiary text-sm">
                            <p className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase">Abertura</span>
                                <span className="font-bold text-quarternary">Pr. Junior Alves</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase">Ministração</span>
                                <span className="font-bold text-quarternary">Pr. Junior Alves</span>
                            </p>
                        </div>
                    </div>


                    <div className="bg-white rounded-3xl p-6 shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-90 border-t-4">
                        <h2 className="text-xl font-bold text-tertiary font-primary uppercase tracking-wider mb-1">
                            Domingo
                        </h2>
                        <p className="text-sm text-gray-500 font-tertiary mb-6">Culto de Adoração • 18h</p>

                        <div className="w-full bg-bg2 p-4 rounded-2xl flex flex-col gap-3 font-tertiary text-sm">
                            <p className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase">Abertura</span>
                                <span className="font-bold text-quarternary">{proxDomingo.abertura}</span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase">Ministração</span>
                                <span className="font-bold text-quarternary">{proxDomingo.ministracao}</span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>
    );
}