import WindowsImg from '../../img/Windows.png'
import BrowerImg from '../../img/Browser.png'
import '../props/top4games.css';


const Top4GamesCard = (props) => {
    return (
        // <article>
        //     <aside>

        //     </aside>
        //     <aside>
        //         <div></div>
        //         <div></div>
        //         <div></div>
        //     </aside>
        // </article>
        
        <article className='sectionTop4Games'>
            <div>

                {/* <img className="" src={props.thumbnail} alt="" /> */}
            </div>
            <div className="">
                <div>
                    <h3>{props.title}</h3>
                    <p className="">{props.short_description}</p>
                    {/* <Link to={`details`}>Read More</Link> */}
                </div>

                <div className="">
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