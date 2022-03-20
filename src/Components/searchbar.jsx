import { useState } from 'react';
import { Link } from 'react-router-dom';
import allG from '../Components/data/allgames.json'

export default function Searchbar() {
    const [suche, setSuche] = useState("")
    const [filterGames, setFilterGames] = useState([])

    const handleSubmit = (evt) => {
        console.log('submitbutton targeted'); //Feature in Version 2.0
    }

    const handleChange = (e) => {
        const searchedWord = e.target.value;
        setSuche(searchedWord);
        const nFilter = allG.filter((value) => {
            return value.title.toLowerCase().includes(searchedWord.toLowerCase())
        });

        if (searchedWord === "") {
            setFilterGames([])
        } else {
            setFilterGames(nFilter)
        }
    }

    const emptySearch = () => {
        setSuche("")
        setFilterGames([])
    }

    return (
        < section className='hallo'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={suche}
                    onChange={handleChange}
                />
                <input type="submit" value='' />
            </form>
            <div>
                <div className='gameResult'>
                    {filterGames.map((value, key) => {
                        return (
                            <Link className='link' key={key} onClick={emptySearch} to={`/details/${value.id}`}>
                                <article className='test'>
                                    <div className='flex'>
                                        <div><img className='bild' src={value.thumbnail} alt={"Thumbnail of " + (value.title)} /></div>
                                    </div>
                                    <div className='wrap'>
                                        <h2>{value.title}</h2>
                                        <p>Platform: {value.platform}</p>
                                        <p>Genre: {value.genre}</p>
                                        <p>Developer: {value.developer}</p>
                                        <p>Publisher: {value.publisher}</p>
                                    </div>
                                </article>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section >
    )


}