import Qrcode from '../assets/imgs/pix-ofertas.png'
import BgContribuicoes from '../assets/imgs/background-ofertas.jpg'

export default function Contribuicoes(){
    return (
        <section style={{backgroundImage: `url(${BgContribuicoes})`}} className='bg-fixed flex flex-col justify-center items-center bg-no-repeat py-20 px-6'>
            <h2 className='text-text'>Dízimos e Ofertas</h2>
            <div className='bg-neutral-900/90 border-2 border-primary rounded-2xl p-8 md:p-12 max-w-5xl w-full flex flex-col md:flex-row gap-10 items-center justify-between shadow-cards'>
                <div className='flex-1 text-white flex flex-col gap-5'>
                    <h3 className='text-secondary'>Contribuições</h3>
                    <p className='text-gray-200 text-sm md:text-base'>A sua fidelidade e generosidade ajudam a manter a obra de Deus viva, sustentando nossos projetos locais e expandindo o Reino. Contribua de forma prática e segura escaneando o QR Code ao lado com o aplicativo do seu banco.</p>
                    <blockquote className='border-l-4 border-primary pl-4 mt-2 italic text-sm md:text-base text-gray-300'>
                    Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.
                    <span className='block mt-3 font-bold text-secondary not-italic'>– 2 Coríntios 9:7</span>
                    </blockquote>
                </div>

                <div className='bg-white p-6 md:p-8 rounded-2xl flex flex-col items-center text-center sm:w-80 md:w-80 shrink-0 shadow-lg'>
                    <img 
                        src={Qrcode}
                        alt='QR Code PIX'
                    />
                    <p className='text-black text-sm my-3 font-tertiary'><strong>Chave PIX: </strong>68.617.815/0001-58</p>
                    <p className='text-gray-700 text-xs font-tertiary'>Igreja Apostólica Restaurando Vidas - IARV</p>
                </div>
            </div>
        </section>
    )
}