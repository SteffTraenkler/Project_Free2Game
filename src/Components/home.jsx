import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import '../Components/home.css'
import '../Components/props/top4games.css'
import '../Components/props/topBrowser.css'
import GeneralCard from "./props/generalProps"
import Top4GamesCard from "./props/top4games"
import TopBrowser from "./props/topBroswer"



export default function Home() {

    const [recent, setRecent] = useState([])
    const [topgames, setTopgames] = useState([])
    const [topbroswer, setTopBrowser] = useState([])

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

    useEffect(() => {
        let newTopBrowserArr = []

        // let loaded = true //für user um das er nicht zu dolle klicken

        fetch('https://www.freetogame.com/api/games?platform=browser&sort-by=release-date&sort-by=popularity')
            .then(respone => respone.json())
            .then(json => {
                console.log(json);
                newTopBrowserArr = json.splice(0, 4)
                console.log(newTopBrowserArr);
                setTopBrowser(newTopBrowserArr)

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
                <div className="buttonOutside"><Link to='/allgames'>SHOW MORE</Link></div>           
                    
                </section>

            <section className="sectionTop">
                <h2>Top 4 Games for PC in June 2021</h2>
                <article className="sectionTop4Games">
                    {topgames.map((elem, j) =>{
                        return(
                            <Top4GamesCard key={j}
                                thumbnail={elem.thumbnail}
                                title={elem.title}
                                short_description={elem.short_description}
                                platform={elem.platform}
                                genre={elem.genre}
                                counter={j +1}
                            />
                        )
                    })}
                </article>
                <div className="buttonOutside"><Link to='/allgames'>SHOW MORE</Link></div>       
            </section>

            <section className="sectionRecently">
                <h2>Top 4 Games for Browser in June 2021</h2>
                <article>
                    {topbroswer.map((eleme, k) =>{
                        return(
                            <TopBrowser key={k}
                                thumbnail={eleme.thumbnail}
                                title={eleme.title}
                                // short_description={eleme.short_description}
                                platform={eleme.platform}
                                genre={eleme.genre}
                            />
                        )
                    })}
                </article>
                <div className="buttonOutside"><Link to='/allgames'>SHOW MORE</Link></div>       
            </section>

        </main>
    )
}