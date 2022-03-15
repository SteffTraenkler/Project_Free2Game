import { useState, useEffect } from "react"
import WindowsImg from '../img/Windows.png'
import BrowerImg from '../img/Browser.png'
import '../Components/home.css'


export default function Home () {

    const [recent, setRecent] = useState([])

    let x 

    useEffect(() =>{
        let newRecentArr = [] 

        // let loaded = true //für user um das er nicht zu dolle klicken

        fetch('https://www.freetogame.com/api/games?sort-by=release-date')
            .then(respone => respone.json())
            .then(json =>{
                console.log(json);
                newRecentArr = json.splice(0, 4)
                console.log(newRecentArr);
                setRecent(newRecentArr)

            })
    }, [x])
    
    return(
        
        <main>
            <section className="sectionHero">
                {/* <article> */}
                    <h1>FIND & TRACK THE BEST FREE-TO-PLAY GAMES!</h1>
                {/* </article> */}
            </section>
            <section className="sectionRecently">
                <h2>Recently Added</h2>
                <article>
                    {recent.map((ele, i) =>{
                        return(
                            <article key={i}>
                                <div>
                                    <img  className="recentPic" src={ele.thumbnail} alt="" />
                                </div>
                                <div className="contentWrapper">
                                <div>
                                    <h3>{ele.title}</h3>
                                    <p className="contentPara">{ele.short_description}</p>
                                    {/* <Link to={`details`}>Read More</Link> */}
                                </div>             
                                
                                <div className="contentBottom">
                                    {(() => {
                                        if(ele.platform == "PC (Windows)"){
                                            return(
                                                <div>
                                                    <img src={WindowsImg} alt="windowsImg" />
                                                </div>
                                            )
                                        } else if(ele.platform == "Web Browser"){
                                            return(
                                                <div>
                                                    <img src={BrowerImg} alt="browserImg" />
                                                </div>
                                            )
                                        }
                                    })()}
                                    <p>
                                        {ele.genre}
                                    </p>
                                </div>
                                </div>
                            </article>
                        )
                    })}
                </article>
            </section>
        </main>
    )
}