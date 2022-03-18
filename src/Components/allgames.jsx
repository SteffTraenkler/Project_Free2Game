import React, { useEffect, useState } from "react";
import Categories from '../Components/data/category.json'
import '../Components/allgames.css'
import GeneralCard from "./props/generalProps";

export default function AllGames() {
    const [selected, setSelected] = useState([]);
    const [platformSelect, setPlatformSelect] = useState("");
    const [sortSelect, setSortSelect] = useState("")

    const [recent, setRecent] = useState([])
    const [error, setError] = useState(false)

    let loaded
    let selectedTags

    // console.log(selected);
    // console.log(platformSelect);
    // console.log(sortSelect);
    // console.log(recent);


    const handleChange = event => {
        const { checked, value } = event.currentTarget;

        setSelected(
            prev => checked
                ? [...prev, value]
                : prev.filter(val => val !== value)
        );
        console.log(selected);
    };
    console.log(selected);

    const handlePlatformChange = ev => {
        setPlatformSelect(ev.target.value)
    }
    console.log(platformSelect);

    const handleSortingChange = e => {
        setSortSelect(e.target.value)
    }
    console.log(sortSelect);

    useEffect(() => {
        let newneededArr = []
        if (platformSelect === "" && selected.length === 0 && sortSelect === "") {
            loaded = true
            console.log('AllGames Inhalte wurden neu gerendert');

            fetch('https://www.freetogame.com/api/games')
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        newneededArr = json.slice(0, 12)
                        setRecent(newneededArr)
                    } return () => {
                        loaded = false
                        console.log('fetch AllGames closed');
                    }
                })
        } else if (platformSelect === "" && selected.length === 0) {
            loaded = true
            console.log('Inhalte für Sortierung only wurden neu gerendert');

            fetch(`https://www.freetogame.com/api/games?sort-by=${sortSelect}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        setRecent(json)
                        console.log(`https://www.freetogame.com/api/games?sort-by=${sortSelect}`);
                    } return () => {
                        loaded = false
                        console.log('fetch sortSelect only closed');
                    }
                })
        } else if (selected.length === 0 && sortSelect === "") {
            loaded = true;
            console.log('Inhalte für Platform only wurden neu gerendert');
            fetch(`https://www.freetogame.com/api/games?platform=${platformSelect}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        setRecent(json)
                        console.log(`https://www.freetogame.com/api/games?platform=${platformSelect}`);
                    } return () => {
                        loaded = false
                        console.log(('fetch Platform only closed'));
                    }
                })
        } else if (selected.length === 0) {
            loaded = true
            console.log('Inhalte für Platform + Sorting wurden neu gerendert');
            fetch(`https://www.freetogame.com/api/games?platform=${platformSelect}&sort-by=${sortSelect}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        setRecent(json)
                        console.log(`https://www.freetogame.com/api/games?platform=${platformSelect}&sort-by=${sortSelect}`);
                    } return () => {
                        loaded = false
                        console.log('fetch Platform + Sorting closed');
                    }
                })
        } else if (platformSelect === "" && selected.length > 0 && sortSelect === "") {
            loaded = true
            selectedTags = selected.join('.')
            console.log(selectedTags);
            console.log('Inhalte für Categories only wurden neu gerendert');

            fetch(`https://www.freetogame.com/api/filter?tag=${selectedTags}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        console.log(`https://www.freetogame.com/api/filter?tag=${selectedTags}`);
                        if (json.status === 0) {
                            setError(true)
                            setRecent([])
                            console.log('Error: API has no Objects to display');
                        } else {
                            setRecent(json)
                            console.log('searched fetch ok, API has Objects to display');
                        }
                    } return () => {
                        loaded = false
                        console.log('fetch Categories only closed');
                    }
                })
        } else if (platformSelect === "" && selected.length > 0) {
            loaded = true
            selectedTags = selected.join('.')
            console.log(selectedTags);
            console.log('Inhalte für Categories + Sorting wurden neu gerendert');

            fetch(`https://www.freetogame.com/api/filter?tag=${selectedTags}&sort-by=${sortSelect}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        console.log(`https://www.freetogame.com/api/filter?tag=${selectedTags}&sort-by=${sortSelect}`);
                        if (json.status === 0) {
                            setError(true)
                            setRecent([])
                            console.log('Error: API has no Objects to display');
                        } else {
                            setRecent(json)
                            console.log('searched fetch ok, API has Objects to display');
                        }
                    } return () => {
                        loaded = false
                        console.log('fetch Categories + Sorting closed');
                    }
                })
        } else if (selected.length > 0 && sortSelect === "") {
            loaded = true
            selectedTags = selected.join('.')
            console.log(selectedTags);
            console.log('Inhalte für Categories + Platform wurden neu gerendert');

            fetch(`https://www.freetogame.com/api/games?platform=${platformSelect}&tag=${selectedTags}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        console.log(`https://www.freetogame.com/api/games?platform=${platformSelect}&tag=${selectedTags}`);
                        if (json.status === 0) {
                            setError(true)
                            setRecent([])
                            console.log('Error: API has no Objects to display');
                        } else {
                            setRecent(json)
                            console.log('searched fetch ok, API has Objects to display');
                        }
                    } return () => {
                        loaded = false
                        console.log('fetch Categories + Platform closed');
                    }
                })
        } else if (selected.length > 0) {
            loaded = true
            selectedTags = selected.join('.')
            console.log(selectedTags);
            console.log('Inhalte für Platform + Categories + Sorting wurden neu gerendert');

            fetch(`https://www.freetogame.com/api/games?platform=${platformSelect}&tag=${selectedTags}&sort-by=${sortSelect}`)
                .then(resp => resp.json())
                .then(json => {
                    if (loaded) {
                        console.log(json);
                        console.log(`https://www.freetogame.com/api/games?platform=${platformSelect}&tag=${selectedTags}&sort-by=${sortSelect}`);
                        if (json.status === 0) {
                            setError(true)
                            setRecent([])
                            console.log('Error: API has no Objects to display');
                        } else {
                            setRecent(json)
                            console.log('searched fetch ok, API has Objects to display');
                        }
                    } return () => {
                        loaded = false
                        console.log('fetch Platform + Categories + Sorting closed');
                    }
                })
        }
    }, [selected, platformSelect, sortSelect])

    console.log(recent);

    // select boxes: 
    //ok: if platformSelect === "" && sortSelect === "" && selected === [] -> allgames slice 12 from json;
    //ok: else if platformSelect === "" && selected === [] -> fetch API https://www.freetogame.com/api/games?sort-by={sortSelect}
    //ok: else if sortSelect === "" && selected ===[] -> fetch API https://www.freetogame.com/api/games?platform={platformSelect}
    //ok: else id selected ===[] -> fetch API https://www.freetogame.com/api/games?platform={platformSelect}&sort-by={sortSelect}

    //ok:  else if platformSelect === "" && sortSelect === "" && selected.length >0 -> map fetch https://www.freetogame.com/api/games?category={selectedmap?}???
    //ok: else if platformSelect === "" &&selected.length >0 -> fetch API https://www.freetogame.com/api/games?category={map???}&sort-by={sortSelect}
    //ok:  else if selected.length >0 && sortSelect = "" -> fetch API https://www.freetogame.com/api/games?platform={platformSelect}&category={map???}
    //else if selected-length>0 -> fetch API https://www.freetogame.com/api/games?platform={platfromSelect}&category={map???}&sort-by={sortSelect}

    return (
        <main>
            <section className="allgamesHero">
                <article>
                    <h1>ALL GAMES</h1>
                </article>
            </section>
            <div className="selection">
                <h3>Hallo</h3>
                <form className="platforms-Check">
                    <ul className="platforms-Check-list">
                        <li>
                    <input type="radio" value="all" id="all" onChange={handlePlatformChange} name="platform"
                    />
                    <label htmlFor="all">All Platforms</label>
                    </li>
                    <li>
                    <input type="radio" value="pc" id="pc" onChange={handlePlatformChange} name="platform"
                    />
                    <label htmlFor="pc">Windows(PC)</label>
                    </li>
                    <li>
                    <input type="radio" value="browser" id="browser" onChange={handlePlatformChange} name="platform"
                    />
                    <label htmlFor="browser">Browser(Web)</label>
                    </li>
                    </ul>
                </form>
                <form className="categoriesCheck">
                    {Categories.map((item, key, index) => (
                        <div key={key}>
                            <label htmlFor={item.id}>{item.name}</label>
                            <input
                                id={item.id}
                                value={item.id}
                                type="checkbox"
                                disabled={!(selected.length < 4) && !(selected.some(val => val === item.id))}
                                checked={(selected.some(val => val === item.id))}
                                onChange={handleChange}
                            />
                            <label htmlFor={`custom-checkbox-${item.id}`}>{item.genre}</label>
                        </div>
                    ))}
                </form>
                <form className="sortCheck">
                    <input type="radio" value="relevance" id="relevance" onChange={handleSortingChange} name="sorting"
                    />
                    <label htmlFor="all">Relevance</label>

                    <input type="radio" value="popularity" id="popularity" onChange={handleSortingChange} name="sorting"
                    />
                    <label htmlFor="popularity">Popularity</label>

                    <input type="radio" value="release-date" id="release-date" onChange={handleSortingChange} name="sorting"
                    />
                    <label htmlFor="release-date">Release Date</label>

                    <input type="radio" value="alphabetical" id="alphabetical" onChange={handleSortingChange} name="sorting"
                    />
                    <label htmlFor="alphabetical">Alphabetical</label>

                </form>
                <div>
                    <label>Checked: </label>{JSON.stringify(selected)}
                </div>
            </div>
            <section className="secRecently">
                {(() => {
                    if (error === true) {
                        return (
                            <div className="errorMessage">
                                <h1>Sorry, we couldn't find that mixture of tags :/ Please try selecting some other categories</h1>
                            </div>
                        )
                    } else {
                        return (
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
                        )
                    }
                })()}

            </section>
        </main>
    );
}
