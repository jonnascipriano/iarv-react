import cultoOracaoImg from '../assets/imgs/oração.jpg'
import cultoLibertacaoImg from '../assets/imgs/libertação.jpg'
import cultoAdoracaoImg from '../assets/imgs/adoração.jpg'

export default function Cultos(){
    const listaCultos = [
        {
            titulo: "Culto de Oração",
            horario: "Quarta-feira às 19h",
            imagem: cultoOracaoImg,
        },
        {
            titulo: "Culto de Libertação",
            horario: "Sexta-feira às 19h",
            imagem: cultoLibertacaoImg
        },
        {
            titulo: "Culto de Adoração",
            horario: "Domingo às 18h",
            imagem: cultoAdoracaoImg,
        },
    ]

    return(
        <section id="cultos" className="py-20 px-6 bg-bg2 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-tertiary mb-12 uppercase font-busorama">
                DIAS DE CULTOS
            </h2>

            <div className='flex flex-wrap items-stretch justify-center gap-8 max-w-6xl w-full'>
                {listaCultos.map((culto, index) => (
                    <div 
                        key={index} 
                        // Efeito App: rounded-3xl, padding (p-3), sombra suave e centralização
                        className='bg-white rounded-3xl p-3 shadow-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-[350px] shrink-0'
                    >
                        {/* Imagem do Culto com bordas próprias e margem embaixo */}
                        <div className='h-52 w-full rounded-2xl overflow-hidden mb-5 shadow-sm'>
                            <img
                                src={culto.imagem}
                                alt={culto.titulo}
                                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                            />
                        </div>

                        {/* Textos Centralizados e Badge */}
                        <div className='px-4 pb-4 flex flex-col items-center gap-3 w-full'>
                            <h3 className='text-xl font-bold text-tertiary font-busorama uppercase tracking-wider'>
                                {culto.titulo}
                            </h3>
                            
                            {/* Horário em formato de Etiqueta (Badge) */}
                            <p className='bg-neutral-100 text-quarternary font-poppins text-sm font-bold py-2 px-6 rounded-full w-max'>
                                {culto.horario}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}