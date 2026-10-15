import { Link } from 'react-router-dom'
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
                <Link to="/" className="nav-link">Início</Link>
                <Link to="" className="nav-link">Quem somos</Link>
                <Link to="/programacao" className="nav-link">Programação Semanal</Link>
                <Link to="" className="nav-link">Ministérios</Link>
                <Link to="" className="nav-link">Contato</Link>
            </nav>


        </header>
    )
}