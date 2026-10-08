// import BgBiblia from "../assets/imgs/biblia-leitura.jpg";
import Plano from "../assets/arquivos/Plano de Leitura.pdf";
import Botao from "./Botao"

export default function PlanoLeitura() {
    return(
        <section className="flex flex-col py-20 px-6">
            <h2>Plano de Leitura Anual</h2>
            <div>
                <div>
                    <h3 className="uppercase">Toda Biblia em 1 ano</h3>
                    <p>Mergulhe na Palavra de Deus diariamente. Criamos um plano de leitura estruturado para que você possa ler toda a Bíblia ao longo de um ano, fortalecendo sua fé e seu relacionamento com Cristo.</p>
                    <blockquote className="border-l-4 border-secondary pl-4 py-3 m-3 italic text-sm md:text-base font-poppins">
                        "Lâmpada para os meus pés é tua palavra, e luz para o meu caminho."
                        <span className="block mt-2 font-bold text-primary not-italic">
                            – Salmos 119:105
                        </span>
                    </blockquote>
                    <a target="_blank" href={Plano}>
                        <Botao>Baixar Plano em PDF</Botao>
                    </a>
                </div>
            </div>
        </section>
    )
}
