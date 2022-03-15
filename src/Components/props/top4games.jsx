import WindowsImg from '../../img/Windows.png'
import BrowerImg from '../../img/Browser.png'
import { Link } from 'react-router-dom'


const Top4GamesCard = (props) => {
    return (
        
        <article>
            <div>
                <img className="top4pic" src={props.thumbnail} alt="" />
            </div>
            <div className="top4div">
                <div>
                    <h3>{props.title}</h3>
                    {/* <p className="">{props.short_description}</p> */}
                    <Link className='readMore' to={`details`}>Read More</Link>
                </div>

                <div className="top4bottom">
                    {(() => {
                        if (props.platform == "PC (Windows)") {
                            return (
                                <div className='windows'>
                                    <img src={WindowsImg} alt="windowsImg" />
                                </div>
                            )
                        } else if (props.platform == "Web Browser") {
                            return (
                                <div className='browser'>
                                    <img src={BrowerImg} alt="browserImg" />
                                </div>
                            )
                        }
                    })()}
                    <p>
                        {props.genre}
                    </p>
                </div>
            </div>
            <div className='testKey'>{props.counter}</div>
        </article>
    )
}

export default Top4GamesCard