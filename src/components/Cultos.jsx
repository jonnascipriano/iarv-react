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
        <section className="py-16 px-6 bg-bg2 flex flex-col items-center justify-center">
            <h2 className="text-tertiary">
                DIAS DE CULTOS
            </h2>

            <div className='flex flex-wrap items-stretch justify-center gap-8 w-full'>
                {listaCultos.map((culto, index) => (
                    <div key={index} className='bg-white rounded-2xl overflow-hidden shadow-cards flex flex-col transition-transform duration-300 hover:-translate-y-2 w-full sm:w-80 md:w-88'>

                        {/* Imagem do Culto */}
                        <div className='h-48 overflow-hidden'>
                            <img
                                src={culto.imagem}
                                alt={culto.titulo}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='p-6 flex flex-col gap-1'>
                            <h3 className='text-lg font-bold text-tertiary font-primary uppercase tracking-wider'>
                                {culto.titulo}
                            </h3>
                            <p className='text-sm text-primary font-quarternary font-semibold'>
                                {culto.horario}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}