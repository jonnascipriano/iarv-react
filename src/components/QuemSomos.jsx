import Botao from "./Botao";
import { Link } from "react-router-dom";

export default function QuemSomos() {
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-primary transition-transform duration-300 hover:-translate-y-1">
                        <h2 className="text-2xl font-bold font-busorama text-tertiary mb-4">Nossa Missão</h2>
                        <p className="font-poppins text-gray-600 leading-relaxed">
                            Restaurar vidas através do amor de Cristo, acolhendo famílias e transformando nossa comunidade com a pregação
                            genuína da Palavra de Deus.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-2xl border-t-4 border-quarternary transition-transform duration-300 hover:-translate-y-1">
                        <h2 className="text-2xl font-bold font-busorama text-tertiary mb-4">Nossa Visão</h2>
                        <p className="font-poppins text-gray-600 leading-relaxed">
                            Ser uma igreja relevante em Forquilha e região, reconhecida por ser um hospital de almas e um lar espiritual
                            para todos que buscam esperança.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative mt-8">
                    <h2 className="text-2xl md:text-3xl font-bold font-busorama text-tertiary mb-12 text-center">Nossa História</h2>

                    <div className="relative border-l-4 border-gray-200 ml-4 md:ml-10 flex flex-col gap-16">
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
                                    Sobral, onde o Pr. Júnior Alves reunia discipulos todas as quartas-feiras para pregar o evangelho.
                                </p>
                                {/* Container da Imagem */}
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/pracadecuba.jpg" // <-- COLOQUE O LINK DA FOTO 1 AQUI
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
                                        src="./src/assets/imgs/quemsomos/inauguracao.jpg" // <-- COLOQUE O LINK DA FOTO 2 AQUI
                                        alt="Crescimento da igreja e departamentos"
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
                                    De segunda a sexta, às 13h, Pr. Júnior Alves, Pr Jáder Loiola e equipe faziam parte do programa de rádio mais ouvido de Forquilha e Região.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/radio.jpg" // <-- COLOQUE O LINK DA FOTO 3 AQUI
                                        alt="Dias atuais na Sede Forquilha"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 5 DA HISTÓRIA - Evangelização*/}
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
                                        src="./src/assets/imgs/quemsomos/evangelizacao.jpg" // <-- COLOQUE O LINK DA FOTO 2 AQUI
                                        alt="Crescimento da igreja e departamentos"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 6 DA HISTÓRIA - Culto*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Cultos</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Resultado de evangelização e programa de rádio
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/culto.jpg" // <-- COLOQUE O LINK DA FOTO 3 AQUI
                                        alt="Dias atuais na Sede Forquilha"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 7 DA HISTÓRIA - Aniversário 1*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">1º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Completando 1 ano de inauguração, foi feito o aniversário em frente a igreja, e já profetizando de que aquele local escuro em frente, fosse criado uma praça.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/aniversario-1.jpg"
                                        alt="Crescimento da igreja e departamentos"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 8 DA HISTÓRIA - Reforma*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Reforma - Sede</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Pintura nas paredes externas e internas, cerâmica nova, banner no altar e ventiladores novos fizeram parte da 1º reforma no templo.
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/reforma.jpg"
                                        alt="Dias atuais na Sede Forquilha"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 9 DA HISTÓRIA - Varzea da Cobra*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Reforma - Várzea da Cobra</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Também foi feito reformas na igreja da Varzea da Cobra
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/reforma-varzea.jpg"
                                        alt="Crescimento da igreja e departamentos"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 10 DA HISTÓRIA - Reforma*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Reforma - Varzea da Cobra</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Resultado da reforma da Várzea da Cobra
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/resultado-reforma-varzea.jpg"
                                        alt="Dias atuais na Sede Forquilha"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 11 DA HISTÓRIA - Culto 2*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Culto</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/culto-2.jpg"
                                        alt="Crescimento da igreja e departamentos"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 12 DA HISTÓRIA - Ato profético - Praça da Paz*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">Ato profético - Praça da paz</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/ato-praca-da-paz.jpg"
                                        alt="Dias atuais na Sede Forquilha"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 13 DA HISTÓRIA - Evangelização 2*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">Evangelização em prol do 2º Aniversário</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                    Toda a equipe de obreiros e juventude fazendo evangelização com panfletos, convidando para o 2º Aniversário que aconteceria nas igrejas de Forquilha, Sobral e Varzea da Cobra
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/evangelizacao-2.jpg"
                                        alt="Crescimento da igreja e departamentos"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 14 DA HISTÓRIA - 2º Aniversário - Forquilha*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">2º Aniversário - Forquilha</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/aniversario-2-sede.jpg"
                                        alt="Dias atuais na Sede Forquilha"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 15 DA HISTÓRIA - 2º Aniversário - Sobral*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-quarternary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-quarternary font-bold mb-4">2º Aniversário - Sobral</h3>
                            <div className="flex flex-col md:flex-row-reverse gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/aniversario-2-sobral.jpg"
                                        alt="Crescimento da igreja e departamentos"
                                        className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* ITEM 16 DA HISTÓRIA - 2º Aniversário - Várzea da Cobra*/}
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[14px] top-1 w-6 h-6 bg-tertiary rounded-full border-4 border-white shadow-md"></div>
                            <h3 className="font-busorama text-xl text-tertiary font-bold mb-4">2º Aniversário - Várzea da Cobra</h3>
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <p className="font-poppins text-gray-600 leading-relaxed md:w-1/2">
                                </p>
                                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-md bg-gray-100">
                                    <img
                                        src="./src/assets/imgs/quemsomos/aniversario-2-varzea.jpg"
                                        alt="Dias atuais na Sede Forquilha"
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
        </section>
    );
}
