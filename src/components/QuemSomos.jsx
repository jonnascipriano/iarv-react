import { useEffect, useRef, useState } from "react";
import Botao from "./Botao";
import { Link } from "react-router-dom";

const coresDoGradiente = ["#b41216", "#fb5233", "#000000"];

function obterCorDoGradiente(indice, total) {
    const posicao = (indice / Math.max(total - 1, 1)) * (coresDoGradiente.length - 1);
    const etapa = Math.min(Math.floor(posicao), coresDoGradiente.length - 2);
    const proporcao = posicao - etapa;
    const inicio = Number.parseInt(coresDoGradiente[etapa].slice(1), 16);
    const fim = Number.parseInt(coresDoGradiente[etapa + 1].slice(1), 16);
    const canais = [16, 8, 0].map((deslocamento) => {
        const valorInicio = (inicio >> deslocamento) & 0xff;
        const valorFim = (fim >> deslocamento) & 0xff;
        return Math.round(valorInicio + (valorFim - valorInicio) * proporcao);
    });

    return `#${canais.map((canal) => canal.toString(16).padStart(2, "0")).join("")}`;
}

const imagensDaHistoria = Object.fromEntries(
    Object.entries(
        import.meta.glob("../assets/imgs/quemsomos/*.jpg"/**/, {
            
            eager: true,
            import: "default",
            query: "?url",
        }),
    ).map(([caminho, url]) => [caminho.slice(caminho.lastIndexOf("/") + 1), url]),
);
export default function QuemSomos() {
    const linhaDoTempoRef = useRef(null);
    const [imagemAmpliada, setImagemAmpliada] = useState(null);

    useEffect(() => {
        const itens = linhaDoTempoRef.current?.querySelectorAll(":scope > div.relative.pl-8");

        itens?.forEach((item, indice) => {
            const cor = obterCorDoGradiente(indice, itens.length);
            const bolinha = item.querySelector(":scope > div.absolute");
            const titulo = item.querySelector(":scope > h3");

            if (bolinha instanceof HTMLElement) bolinha.style.backgroundColor = cor;
            if (titulo instanceof HTMLElement) titulo.style.color = cor;
        });
    }, []);

    useEffect(() => {
        if (!imagemAmpliada) return undefined;

        function fecharComEscape(evento) {
            if (evento.key === "Escape") setImagemAmpliada(null);
        }

        window.addEventListener("keydown", fecharComEscape);
        return () => window.removeEventListener("keydown", fecharComEscape);
    }, [imagemAmpliada]);

    return (
        <section className="py-20 bg-bg2 flex flex-col items-center w-full px-6 min-h-screen">
            <div className="flex flex-col items-center text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-tertiary mb-4 uppercase font-busorama">Quem Somos</h1>
                <div className="w-24 h-1 bg-primary mb-6 rounded-full"></div>
                <p className="font-poppins text-gray-600 max-w-2xl text-lg">
                    Conheça a história, a missão e o coração da Igreja Apostólica Restaurando Vidas.
                </p>
            </div>

            <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto items-center mb-12">
                

                <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold font-busorama text-tertiary mb-12 text-center">Nossa História</h2>

                    <div
                        ref={linhaDoTempoRef}
                        className="relative border-l-4 border-gray-200 ml-4 md:ml-10 flex flex-col gap-16 [&_img]:cursor-zoom-in"
                        onClick={(evento) => {
                            if (evento.target instanceof HTMLImageElement) {
                                setImagemAmpliada({
                                    src: evento.target.currentSrc,
                                    alt: evento.target.alt,
                                });
                            }
                        }}
                    >
                        {" "}
                        {/* Aumentei o gap para dar respiro entre os eventos */}
                        {/* ITEM 1 DA HISTÓRIA - Praça de Cuba*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-primary font-bold mb-4">O início</h3>

                            {/* Flexbox divide texto e imagem */}
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Antes mesmo de ser inaugurada na cidade de Forquilha, a IARV já havia nascido na Praça de Cuba em
                                    Sobral, onde o Pr. Júnior Alves reunia discipulos todas às quartas-feiras para pregar o evangelho.
                                </p>
                                {/* Container da Imagem */}
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["pracadecuba.jpg"]}
                                        alt="Primeiros encontros da igreja"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 2 DA HISTÓRIA - Inauguração*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Inauguração</h3>

                            {/* Flex-row-reverse para alternar o lado da imagem no PC e deixar o design dinâmico */}
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Contando com apoio principalmente de sua família, Pr Júnior Alves inaugurou a Igreja Apostólica
                                    Restaurando Vidas no bairro Cidade de Deus, em Forquilha - CE, onde tudo começou.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["inauguracao.jpg"]}
                                        alt="Inauguração"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 3 DA HISTÓRIA - Rádio*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Programa Voz da Restauração</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    De segunda a sexta, às 13h, Pr. Júnior Alves, Pr Jáder Loiola e equipe faziam parte do programa de rádio
                                    mais ouvido de Forquilha e Região.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["radio.jpg"]}
                                        alt="Rádio"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 4 DA HISTÓRIA - Evangelização*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Evangelização</h3>

                            {/* Flex-row-reverse para alternar o lado da imagem no PC e deixar o design dinâmico */}
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Obreiros e discipulos fazendo evangelização no Bairro Cidade de Deus
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["evangelizacao.jpg"]}
                                        alt="Evangelização"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 5 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Cultos</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Resultado de evangelização e programa de rádio
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto.jpg"]}
                                        alt="Culto"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 6 DA HISTÓRIA - Aniversário 1*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">1º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Completando 1 ano de inauguração, foi feito o aniversário em frente a igreja, e já profetizando de que
                                    aquele local escuro em frente, fosse criado uma praça.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-1.jpg"]}
                                        alt="1º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 7 DA HISTÓRIA - Reforma*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Reforma - Sede</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Pintura nas paredes externas e internas, cerâmica nova, banner no altar e ventiladores novos fizeram
                                    parte da 1º reforma no templo.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["reforma.jpg"]}
                                        alt="Reforma"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 8 DA HISTÓRIA - Varzea da Cobra*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Reforma - Várzea da Cobra</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Também foi feito reformas na igreja da Varzea da Cobra
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["reforma-varzea.jpg"]}
                                        alt="Reforma - Varzea da Cobra"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 9 DA HISTÓRIA - Reforma*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Reforma - Varzea da Cobra</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Resultado da reforma da Várzea da Cobra
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["resultado-reforma-varzea.jpg"]}
                                        alt="Reforma - Varzea da Cobra"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 10 DA HISTÓRIA - Culto 2*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2"></p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-2.jpg"]}
                                        alt="Culto"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 11 DA HISTÓRIA - Célula - Sobral*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Células - Sobral</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["sobral-celula.jpg"]}
                                        alt="Célula em Sobral"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 12 DA HISTÓRIA - Culto - Sobral*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Culto - Sobral</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2"></p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["sobral-culto.jpg"]}
                                        alt="Culto em Sobral"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 13 DA HISTÓRIA - Ato profético - Praça da Paz*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Ato profético - Praça da paz</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2"></p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["ato-praca-da-paz.jpg"]}
                                        alt="Ato profético - Praça da Paz"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 14 DA HISTÓRIA - Evangelização 2*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">
                                Evangelização em prol do 2º Aniversário
                            </h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Toda a equipe de obreiros e juventude fazendo evangelização com panfletos, convidando para o 2º
                                    Aniversário que aconteceria nas igrejas de Forquilha, Sobral e Varzea da Cobra
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["evangelizacao-2.jpg"]}
                                        alt="Evangelização 2"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 15 DA HISTÓRIA - 2º Aniversário - Forquilha*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">2º Aniversário - Forquilha</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2"></p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-2-sede.jpg"]}
                                        alt="2º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 16 DA HISTÓRIA - 2º Aniversário - Sobral*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">2º Aniversário - Sobral</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2"></p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-2-sobral.jpg"]}
                                        alt="2º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 17 DA HISTÓRIA - 2º Aniversário - Várzea da Cobra*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">2º Aniversário - Várzea da Cobra</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2"></p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-2-varzea.jpg"]}
                                        alt="2º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 18 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Nova localização</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Em 2017 mudamos de localização, saimos do Bairro Cidade de Deus, e fomos para o Centro.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-3.jpg"]}
                                        alt="Culto em nova localização"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 19 DA HISTÓRIA - Culto - Aracatiaçu*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Culto Campal - Aracatiaçu</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Á 32km da cidade de Forquilha, fizemos um culto campal em Aracatiaçu, interior de Sobral. Moradores de toda vizinhança pegavam suas cadeiras para ir assistir o culto.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aracatiacu-culto.jpg"]}
                                        alt="Culto campal em Aracatiaçu, interior de Sobral"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 20 DA HISTÓRIA - Unção para obreiras*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Consagração</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Consagração de obreiras para a cidade de Sobral.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["uncao-obreiras-sobral.jpg"]}
                                        alt="consagração de obreiras"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 21 DA HISTÓRIA - 3º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Preparação para o 3º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Fazendo todos os preparativos para o 3º aniversário, no Centro de Convenções em Sobral.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-3-bastidores.jpg"]}
                                        alt="bastidores do 3º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 22 DA HISTÓRIA - 3º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">3º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 3º Aniversário.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-3.jpg"]}
                                        alt="3º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 23 DA HISTÓRIA - 3º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">3º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração do 3º aniversário.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-3-2.jpg"]}
                                        alt="3º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 24 DA HISTÓRIA - Culto campal*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Culto campal</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Culto realizado no Setor 2
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-campal.jpg"]}
                                        alt="Culto campal em setor 2"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 25 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-4.jpg"]}
                                        alt="3º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 26 DA HISTÓRIA - Evangelização*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Evangelização</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Em prol do 4º aniversario, toda a equipe de fé se reuniu para ir as ruas de Forquilha evangelizar, divulgar panfletos, falar da palavra de Deus, e convidar.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["evangelizacao-3.jpg"]}
                                        alt="evangelização em prol do 4º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 27 DA HISTÓRIA - 4º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">4º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                Realizado no Ginásio Poli Esportivo em Forquilha - CE
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-4.jpg"]}
                                        alt="4º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 28 DA HISTÓRIA - 4º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">4º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-4-2.jpg"]}
                                        alt="4º Aniversário"
                                        className="w-full h-48 md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 29 DA HISTÓRIA - 4º Aniversário - Equipe*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">4º Aniversário - Equipe</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-4-equipe.jpg"]}
                                        alt="4º aniversario - equipe"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 30 DA HISTÓRIA - 4º Aniversário - Consagração*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">4º Aniversário - Consagração</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                Consagração para Obreiros, Diáconos e Presbíteros.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-4-consagracao.jpg"]}
                                        alt="4º Aniversário - consagração"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 31 DA HISTÓRIA - 4º Aniversário - Consagração*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">4º Aniversário - Consagração</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Consagração para Obreiros, Diáconos e Presbíteros.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-4-consagracao-2.jpg"]}
                                        alt="4º aniversario - Consagração"
                                        className="w-full h-48 object-cover md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 32 DA HISTÓRIA - 4º Aniversário - Consagração*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">4º Aniversário - Consagração</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Consagração para Obreiros, Diáconos e Presbíteros.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-4-consagracao-3.jpg"]}
                                        alt="4º Aniversário - consagração"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 33 DA HISTÓRIA - Ato pela paz de Sobral*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Ato profético</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Em prol da paz de Sobral, fomos às ruas do bairro Vila União e Terrenos Novos fazer um ato profético.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["sobral-ato-oracao-paz.jpg"]}
                                        alt="oração nas ruas de sobral"
                                        className="w-full h-48 object-cover md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 34 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-5.jpg"]}
                                        alt="4º Aniversário - consagração"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 35 DA HISTÓRIA - Pandemia*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Pandemia</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Em 2020 houve a pandemia e por um bom tempo nossos cultos foram através de Live pelo Facebook.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["pandemia.jpg"]}
                                        alt="pandemia"
                                        className="w-full h-48 object-cover md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 36 DA HISTÓRIA - Aniversário Remoto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">5º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Comemoramos o 5º aniversario remotamente, também através de live pelo Facebook. Devido ao forte impacto da pandemia no ano seguinte, não comemoramos o 6º aniversario.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-5.jpg"]}
                                        alt="5º Aniversário - Remoto"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 37 DA HISTÓRIA - Culto Pandemia*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-6.jpg"]}
                                        alt="pandemia"
                                        className="w-full h-48 object-cover md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 38 DA HISTÓRIA - 7º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">7º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 7º Aniversário, com participação especial do Pr. Jessé e banda Haziel.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-7.jpg"]}
                                        alt="7º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 39 DA HISTÓRIA - 7º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">7º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-7-2.jpg"]}
                                        alt="7º aniversario"
                                        className="w-full h-48 object-cover md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 40 DA HISTÓRIA - 8º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">8º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 8º Aniversário, com participação especial do Pr Erivaldo Ferreira.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-8.jpg"]}
                                        alt="8º Aniversário"
                                        className="w-full h-48 md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 41 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-7.jpg"]}
                                        alt="culto"
                                        className="w-full h-48 md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 42 DA HISTÓRIA - 10º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">10º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 10º Aniversário.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-10.jpg"]}
                                        alt="10º Aniversário"
                                        className="w-full h-48 md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 43 DA HISTÓRIA - 10º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">10º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-10-2.jpg"]}
                                        alt="10º aniversario"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 44 DA HISTÓRIA - 10º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">10º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 10º Aniversário.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-10-3.jpg"]}
                                        alt="10º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 45 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-8.jpg"]}
                                        alt="Culto"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 46 DA HISTÓRIA - 11º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">11º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 11º Aniversário.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-11.jpg"]}
                                        alt="11º Aniversário"
                                        className="w-full h-48 md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 47 DA HISTÓRIA - 11º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">11º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 11º aniversario com participação especial do Pr Paulo Roberto.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-11-2.jpg"]}
                                        alt="11º aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 48 DA HISTÓRIA - 11º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">11º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Equipe do 11º Aniversário.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-11-equipe.jpg"]}
                                        alt="11º Aniversário"
                                        className="w-full h-48 md:h-64 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 49 DA HISTÓRIA - 11º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">11º Aniversário</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Celebração ao 11º aniversario com participação especial do Pr Jesse e Bp Claudinei Santos.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-11-3.jpg"]}
                                        alt="11º aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 50 DA HISTÓRIA - 11º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">11º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Equipe do 11º Aniversário com participação especial do Pr Jesse e Bp Claudinei Santos.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["aniversario-11-4.jpg"]}
                                        alt="11º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 51 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["culto-9.jpg"]}
                                        alt="Culto"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 52 DA HISTÓRIA - 11º Aniversário*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Dias atuais</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src={imagensDaHistoria["dias-atuais.jpg"]}
                                        alt="11º Aniversário"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/galeria">
                <Botao>Veja a galeria da fotos</Botao>
            </Link>
            {imagemAmpliada && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Visualizador de fotos"
                    onClick={() => setImagemAmpliada(null)}
                >
                    <button
                        type="button"
                        onClick={() => setImagemAmpliada(null)}
                        aria-label="Fechar visualizador"
                        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-3xl text-white transition-colors hover:bg-white/30"
                    >
                        &times;
                    </button>
                    <img
                        src={imagemAmpliada.src}
                        alt={imagemAmpliada.alt}
                        className="max-h-[90vh] max-w-[95vw] object-contain"
                        onClick={(evento) => evento.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
