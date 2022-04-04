import "./AboutContent.css";
import logo from "../../asset//logo.png";

const AboutContent = () => {
    return (
        <>
            <div className="about_page">
                <div className="about_wrapper">
                    <img src={logo} alt="" />
                    <h1>About</h1>
                    <p>
                        bicycle, also called bike, two-wheeled steerable machine that is
                        pedaled by the rider's feet. On a standard bicycle the wheels are
                        mounted in-line in a metal frame, with the front wheel held in a
                        rotatable fork. The rider sits on a saddle and steers by leaning and
                        turning handlebars that are attached to the fork. The feet turn
                        pedals attached to cranks and a chainwheel.
                        <br />
                        <br />
                        Bicycles are widely used for transportation, recreation, and sport
                        (see cycling). Throughout the world, bicycles are essential to
                        moving people and goods in areas where there are few automobiles.
                        Globally, there are twice as many bicycles as automobiles, and they
                        outsell automobiles three to one. The Netherlands, Denmark, and
                        Japan actively promote bicycles for shopping and commuting. In the
                        United States, bike paths have been constructed in many parts of the
                        country, and bicycles are encouraged by the United States government
                        as an alternative to automobiles.
                    </p>

                    <div className="span">
                        <span>© 2022-2025 morshedulmunna All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutContent;
