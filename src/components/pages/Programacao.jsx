export default function Programacao() {

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

    const diaDoMes = new Date().getDate()
    const numeroDaSemana = ((Math.ceil(diaDoMes / 7)) - 1);

    const diaAtual = new Date().getDay()
    const diasParaDomingo = (7 - diaAtual) - 1;

    const proxDomingo = escalaDomingo[numeroDaSemana]
    const proxQuarta = escalaQuarta[numeroDaSemana]

    console.log(proxDomingo)

    console.log(diaDoMes, numeroDaSemana)
    console.log(diaAtual, diasParaDomingo)

    return (
            <section>
                <h1 className="text-center">Programação Semanal</h1>
                <div className="flex flex-col min-w-full p-9 gap-20">
                    <div className="bg-white rounded-3xl p-6 shadow-xl">
                        <h2 className="mb-0">Quarta-feira</h2>
                        <p>Culto de Oração</p>
                        <p>Abertura do culto: {proxQuarta.abertura}</p>
                        <p>Ministração: {proxQuarta.ministracao}</p>
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-xl">
                        <h2>Sexta-feira</h2>
                        <p>Culto de Libertação</p>
                        <p>Abertura do culto: Pr. Junior Alves</p>
                        <p>Ministração: Pr. Junior Alves</p>
                    </div>
                    <div className="bg-white rounded-3xl p-6 shadow-xl">
                        <h2>Domingo</h2>
                        <p>Culto de Adoração</p>
                        <p>Abertura do culto: {proxDomingo.abertura}</p>
                        <p>Ministração: {proxDomingo.ministracao}</p>
                    </div>
                </div>
            </section>
    );
}