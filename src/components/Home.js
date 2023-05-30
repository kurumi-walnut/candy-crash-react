import {Link} from 'react-router-dom';
import candy_crush from '../images/giphy.gif';

const Home = () => {

    return (
        <div className="homepage">
            <div className='main-body'>
                <Link to={"/game"}>
                    <button className='start-game'>Start Game</button>
                </Link>

                <div style={{display: "absolute", paddingLeft: "30px"}}>
                    <img src={candy_crush} alt="candy crush logo"/>
                </div>
            </div>

            <div className="footer">Developed by Aruzhan Amangeldieva</div>
        </div>
    );
}

export default Home;
