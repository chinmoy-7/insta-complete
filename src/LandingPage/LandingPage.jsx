import './LandingPage.css'
import { Link } from 'react-router-dom'
import landing from '../imgs/landing.jpeg'
const LandingPage=()=>{

    return(
        <>
            <div className="landing-container">
                <div className="landing-left">
                    <img src={landing} alt="a" />
                </div>
                <div className="landing-right">
                    <p>10x Team 04</p>
                    <Link to={"/post"} className="link"> <button>Enter</button></Link>
                </div>
            </div>
        </>
    )
}
export default LandingPage;