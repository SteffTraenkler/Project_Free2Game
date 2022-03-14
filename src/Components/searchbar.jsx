import { useState } from 'react';
import Search from '../img/Search.png'

export default function Searchbar() {
    const [suche, setSuche] = useState("")

    const handleSubmit = (evt) => {
        console.log('submitbutton');
    }

    return (
        < section >
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={suche}
                    onChange={e => setSuche(e.target.value)}
                />
                <input type="submit" value='' />

            </form>
        </section >
    )
}