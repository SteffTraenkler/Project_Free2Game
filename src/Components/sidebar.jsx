import HomeBtn from "../img/HomeBtn.png"
import AllGame from "../img/AllGame.png"
import RecentlyKreuz from "../img/RecentlyKreuz.png"
import "../Components/sidebar.css"
import { useState } from "react"
import Logo from '../img/LogoFree2game.png'
import Searchbar from './searchbar'
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [navbarOpen, setNavbarOpen] = useState(true)

    const handleToggle = (prev) => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <div>
            <Link to='/'><div className={`menuNav ${navbarOpen ? "logoClose" : "logoOpen"}`}><img className="img" src={Logo} alt="" /></div></Link>
            <aside className={`menuNav ${navbarOpen ? " " : "showMenu"}`}>
                <section onClick={handleToggle} className={navbarOpen ? "burger" : "burger close"} >

                    <span></span>
                </section>

                <section>
                    <ul>
                        <li><a href=""><div><img src={HomeBtn} alt="" /></div><span className={`menuNav ${navbarOpen ? "hideText" : "showText"}`}>Home</span></a></li>
                        <li><a href=""><div><img src={AllGame} alt="" /></div><span className={`menuNav ${navbarOpen ? "hideText" : "showText"}`}>All Games</span></a></li>
                        <li><a href=""><div><img src={RecentlyKreuz} alt="" /></div><span className={`menuNav ${navbarOpen ? "hideText" : "showText"}`}>Recently Added</span></a></li>
                    </ul>
                </section>
            </aside>
        </div>
    )
}