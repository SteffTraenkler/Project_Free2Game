import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function Details() {
    let gameID = useParams('id')

    const [gameDetail, setGameDetail] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${gameID}`)
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                setGameDetail(json)
            })
    }, [gameID])

    return (
        <main className="detailMain">
            <section className="detailHero">
                <div><img src={gameDetail.screenshots[0].image} alt='Hero Pic of `${gameDetail.title}`' /></div>
            </section>
            <section className="articleDetail">
                <article className="artGameDescription">
                    <div>
                        <h2>{gameDetail.title}</h2>
                        <div><img src={gameDetail.thumbnail} alt="`Thumbnail of ${gameDetail.title}`" /></div>
                        <h3>{gameDetail.platform}</h3>
                        <p className="genreDetail">{gameDetail.genre}</p>
                        <a href={gameDetail.game_url}>PLAY NOW</a>
                    </div>
                    <div>
                        <h2>About</h2>
                        <p className='detailDescription'>{gameDetail.description}</p>
                    </div>
                </article>
                <article className="artGameDetails">
                    <div><img src={gameDetail.screenshots[1].image} alt="`Screenshot ${gameDetail.title}`" /></div>
                    <div><img src={gameDetail.screenshots[2].image} alt="`Screenshot 2 ${gameDetail.title}`" /></div>
                    <article>
                        <h3>Additional Information</h3>
                        <p>Please not this free-to-play game may or may not offer optional in-game purchases</p>
                        <div>
                            <h3>Developer</h3>
                            <p className="dev">{gameDetail.developer}</p>
                            <h3>Publisher</h3>
                            <p className="publisher">{gameDetail.publisher}</p>
                            <h3>Release Date</h3>
                            <p className="releaseDate">{gameDetail.release_date}</p>
                        </div>

                    </article>
                    <article>
                        {(() => {
                            if (gameDetail.platform === "PC (Windows)") {
                                return (
                                    <article>
                                        <h2>Minimum System Requirements (Windows)</h2>
                                        <div>
                                            <div>
                                                <h3>OS</h3>
                                                <p>{gameDetail.minimum_system_requirements.os}</p>
                                            </div>
                                            <div>
                                                <h3>Processor</h3>
                                                <p>{gameDetail.minimum_system_requirements.processor}</p>
                                            </div>
                                            <div>
                                                <h3>Memory</h3>
                                                <p>{gameDetail.minimum_system_requirements.memory}</p>
                                            </div>
                                            <div>
                                                <h3>Graphics</h3>
                                                <p>{gameDetail.minimum_system_requirements.graphics}</p>
                                            </div>
                                            <div>
                                                <h3>Storage</h3>
                                                <p>{gameDetail.minimum_system_requirements.storage}</p>
                                            </div>
                                            <div>
                                                <h3>Additional Notes</h3>
                                                <p>Specifications may changes during development</p>
                                            </div>
                                        </div>
                                    </article>
                                )
                            } else if (gameDetail.platform === "Web Browser") {
                                return (
                                    null
                                )
                            }
                        })()}
                    </article>
                </article>
            </section>
        </main>
    )
}