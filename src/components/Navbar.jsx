import logo from '../assets/logo.png'

export default function Navbar(){
    return(
        <header className="
                flex
                justify-around
                items-center
                shadow-md
                px-8
                py-4
                bg-tertiary
                text-white
                flex-wrap
                gap-8
                ">
            <div className='text-lg flex items-center gap-2'>
                <img src={logo} className='h-15 w-auto'/>
                <span className='font-primary'>IGREJA APOSTÓLICA<br></br>RESTAURANDO VIDAS</span>
            </div>

            <nav className='flex flex-wrap gap-6 text-sm font-tertiary justify-center'>
                <a href="" className="nav-link">Início</a>
                <a href="" className="nav-link">Quem somos</a>
                <a href="" className="nav-link">Programação Semanal</a>
                <a href="" className="nav-link">Ministérios</a>
                <a href="" className="nav-link">Contato</a>
            </nav>


        </header>
    )
}