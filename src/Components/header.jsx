import Logo from '../img/LogoFree2game.png'
import Searchbar from './searchbar'
import '../Components/header.css'

export default function Header() {
    return (
        <header>
            <div className="logo"><img src={Logo} alt="" /></div>
            <Searchbar />
        </header>
    )
}