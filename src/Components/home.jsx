import { useState, useEffect } from "react"
import '../Components/home.css'
import GeneralCard from "./props/generalProps"
import Top4GamesCard from "./props/top4games"



export default function Home() {

    const [recent, setRecent] = useState([])
    const [topgames, setTopgames] = useState([])

    let x

    useEffect(() => {
        let newRecentArr = []

        // let loaded = true //für user um das er nicht zu dolle klicken

        fetch('https://www.freetogame.com/api/games?sort-by=release-date')
            .then(respone => respone.json())
            .then(json => {
                console.log(json);
                newRecentArr = json.splice(0, 4)
                console.log(newRecentArr);
                setRecent(newRecentArr)

            })
    }, [x])

    useEffect(() =>{
        let newTopgamesArr = []
        
        //Wenn möglich Datum noch anpassen im fatch

        fetch('https://www.freetogame.com/api/games?platform=pc&sort-by=release-date&sort-by=popularity')
            .then(respone => respone.json())
            .then(json =>{
                console.log(json);
                newTopgamesArr = json.splice(0,4)
                console.log(newTopgamesArr);
                setTopgames(newTopgamesArr)
            })
    }, [x])

    return (

        <main>
            <section className="sectionHero">
                {/* <article> */}
                <h1>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</h1>
                {/* </article> */}
            </section>
            <section className="sectionRecently">
                <h2>Recently Added</h2>
                <article>
                    {recent.map((ele, i) => {
                        return (
                            <GeneralCard key={i}
                                thumbnail={ele.thumbnail}
                                title={ele.title}
                                short_description={ele.short_description}
                                platform={ele.platform}
                                genre={ele.genre}
                            />
                        )
                    })}
                </article>
            </section>
            <section className="sectionTopgames">
                <h2>Top 4 Games for PC in June 2021</h2>
                <article>
                    {topgames.map((elem, j) =>{
                        return(
                            <Top4GamesCard key={j}
                                thumbnail={elem.thumbnail}
                                title={elem.title}
                                short_description={elem.short_description}
                                platform={elem.platform}
                                genre={elem.genre}
                            />
                        )
                    })}
                </article>
            </section>

        </main>
    )
}