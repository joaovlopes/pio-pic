import Logo  from '@/assets/logo.png'
import './styles.scss';

export function Header() {
    return (
        <header className='header-container'>
            <button>
                <i className="fa-solid fa-bars"></i>
            </button>
            <img src={Logo} alt="Logo da empresa" className='logo-image'/>
            <button>
                <i className="fa-solid fa-circle-user"></i>
            </button>
        </header>
    )
}