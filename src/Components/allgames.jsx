import { useState, useEffect } from "react"
import GeneralCard from "./props/generalProps";
import '../Components/allgames.css'
import allG from '../Components/data/allgames.json'


export default function AllGames() {
    const [recent, setRecent] = useState([])

    // let loaded = true //für user um das er nicht zu dolle klicken

    let x
    // var expanded = false;

    // function showCheckboxes() {
    //   var checkboxes = document.getElementById("checkboxes");
    //   if (!expanded) {
    //     checkboxes.style.display = "block";
    //     expanded = true;
    //   } else {
    //     checkboxes.style.display = "none";
    //     expanded = false;
    //   }
    // }

    useEffect(() => {
        let newRecentArr = []
        newRecentArr = allG.splice(0, 12)
        setRecent(newRecentArr)
        //     fetch('../Components/data/allgames.json')
        //         .then(respone => respone.json())
        //         .then(json =>{
        //             console.log(json);
        //             newRecentArr = json.splice(0, 12)
        //             console.log(newRecentArr);
        //             setRecent(newRecentArr)
        //         })
    }, [x]);

    return (
        <main>
            <section className="allgamesHero">
                <article>
                    <h1>ALL GAMES</h1>
                </article>
            </section>
            {/* <form>              
                <div class="multiselect">
                    <div class="selectBox" onclick="showCheckboxes()">
                            <select>
                        <option></option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes">
                <label for="one">
                    <input type="checkbox" id="one" />First checkbox</label>
                <label for="two">
                    <input type="checkbox" id="two" />Second checkbox</label>
                <label for="three">
                    <input type="checkbox" id="three" />Third checkbox</label>
                </div>
            </div>
            </form> */}
            <section className="secRecently">
                <article>
                    {recent.map((ele, i) => {
                        return (
                            <GeneralCard
                                key={i}
                                thumbnail={ele.thumbnail}
                                title={ele.title}
                                platform={ele.platform}
                                genre={ele.genre}
                                id={ele.id}
                            />
                        )
                    })}
                </article>

            </section>
        </main>
    )
}