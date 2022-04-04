import "./Header.css";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const Header = () => {
    return (
        <>
            <div className="header__main">
                <Fade left>
                    <div className="wrapper">
                        <h1>
                            Odyssey <span>ONE</span>
                        </h1>
                        <p>
                            Available Best Electric Bike price In Bangladesh. Here we have
                            sorted out top-ranked E bike, Electric Scooter, and E-mopeds
                            currently available in the market from the various brands
                            operating in Bangladesh.
                        </p>
                        <Pulse>
                            <button>Buy One</button>
                        </Pulse>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default Header;
