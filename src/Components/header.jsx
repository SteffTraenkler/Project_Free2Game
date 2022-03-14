import Logo from '../img/LogoFree2game.png'
import Searchbar from './searchbar'
import '../Components/header.css'
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header>
            <Searchbar />
        </header>
    )
}