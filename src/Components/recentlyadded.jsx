import { useState, useEffect } from "react"
import GeneralCard from "./props/generalProps"
import Searchbar from './searchbar'
import Logo from '../img/LogoFree2game.png'
import Sidebar from "./sidebar"
import "../Components/recentlyadded.css"
import { Link } from "react-router-dom"
import Header from "./header"

export default function Added() {
    const [recent, setRecent] = useState([])

    let x

    useEffect(() => {
        let newRecentArr = []

        // let loaded = true //für user um das er nicht zu dolle klicken

        fetch('https://www.freetogame.com/api/games?sort-by=release-date')
            .then(respone => respone.json())
            .then(json => {
                console.log(json);
                newRecentArr = json.splice(0, 8)
                console.log(newRecentArr);
                setRecent(newRecentArr)

            })
    }, [x])
    
    return (
        
        <main>
            <Header/>
            <Searchbar/>
            <Sidebar/>
            <section className="secHero">
                <article> 
                <h1>RECENTLY ADDED</h1>
                </article> 
            </section>
            <section className="secRecently">
                <article>
                    {recent.map((ele, i) => {
                        return (
                            <GeneralCard key={i}
                                thumbnail={ele.thumbnail}
                                title={ele.title}
                                platform={ele.platform}
                                genre={ele.genre}
                            />
                        )
                    })}
                </article>
            </section>
        </main>
    )
    
}