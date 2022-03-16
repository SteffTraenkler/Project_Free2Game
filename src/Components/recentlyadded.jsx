import { useState, useEffect } from "react"
import GeneralCard from "./props/generalProps"
import Searchbar from './searchbar'
import Sidebar from "./sidebar"
import "../Components/recentlyadded.css"
import Header from "./header"
import { useOutletContext } from "react-router-dom";

export default function Added() {
    const [fetchAllAndRecent, setFetchAllAndRecent] = useOutletContext();

    return (

        <main>
            <Header />
            <Searchbar />
            <Sidebar />
            <section className="secHero">
                <article>
                    <h1>RECENTLY ADDED</h1>
                </article>
            </section>
            <section className="secRecently">
                <article>
                    {fetchAllAndRecent.slice(0, 8).map((ele, i) => {
                        return (
                            <GeneralCard key={i}
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