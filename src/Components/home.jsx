import { useState, useEffect } from "react"
import '../Components/home.css'
import GeneralCard from "./props/generalProps"


export default function Home() {

    const [recent, setRecent] = useState([])

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
        </main>
    )
}