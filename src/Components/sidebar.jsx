import HomeBtn from "../img/HomeBtn.png"
import AllGame from "../img/AllGame.png"
import RecentlyKreuz from "../img/RecentlyKreuz.png"
import "../Components/sidebar.css"
import { useState } from "react"

export default function Sidebar (){
const [navbarOpen, setNavbarOpen] = useState(true)

const handleToggle = (prev) => {
    setNavbarOpen(prev => !prev)
}

    return(
        <aside>
            <section onClick={handleToggle} className={navbarOpen ? "burger" : "burger close"} >
            
                <span></span>
            </section>

            <section class="menu">
            <ul>
                <li><a href=""><div><img src={HomeBtn} alt="" /></div>Home</a></li>
                <li><a href=""><div><img src={AllGame} alt="" /></div>All Games</a></li>
                <li><a href=""><div><img src={RecentlyKreuz} alt="" /></div>Recently Added</a></li>
            </ul>
            </section>
        </aside>
    )
}