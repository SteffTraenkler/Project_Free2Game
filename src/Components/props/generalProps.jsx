import WindowsImg from '../../img/Windows.png'
import BrowerImg from '../../img/Browser.png'
import { Link } from 'react-router-dom'


const GeneralCard = (props) => {
    return (
        <article>
            <div>
                <img className="recentPic" src={props.thumbnail} alt="" />
            </div>
            <div className="contentWrapper">
                <div>
                    <h3>{props.title}</h3>
                    <p className="contentPara">{props.short_description}</p>
                    <Link className='readMore' to={`details`}>Read More</Link>
                </div>

                <div className="contentBottom">
                    {(() => {
                        if (props.platform == "PC (Windows)") {
                            return (
                                <div className='windows'>
                                    <img src={WindowsImg} alt="windowsImg" />
                                </div>
                            )
                        } else if (props.platform == "Web Browser") {
                            return (
                                <div>
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
        </article>
    )
}

export default GeneralCard