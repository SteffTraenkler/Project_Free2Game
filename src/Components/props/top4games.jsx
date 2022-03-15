import WindowsImg from '../../img/Windows.png'
import BrowerImg from '../../img/Browser.png'


const Top4GamesCard = (props) => {
    return (
        <article>
            <div>
                <img className="recentPic" src={props.thumbnail} alt="" />
            </div>
            <div className="contentWrapper">
                <div>
                    <h3>{props.title}</h3>
                    <p className="contentPara">{props.short_description}</p>
                    {/* <Link to={`details`}>Read More</Link> */}
                </div>

                <div className="contentBottom">
                    {(() => {
                        if (props.platform == "PC (Windows)") {
                            return (
                                <div>
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

export default Top4GamesCard