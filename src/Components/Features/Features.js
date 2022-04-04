import "./Features.css";
import Fade from "react-reveal/Fade";

const Features = () => {
    return (
        <>
            <div className="features ">
                <Fade top>
                    <div className="features__content">
                        <h1>Rear brakes</h1>
                        <p>
                            The rear brake is designed to provide stability, or else they
                            would lock up every time you hit the brake pedal. If you have bad
                            rear brakes, the rear of your vehicle might
                        </p>
                        <div className="feature">
                            <h2>Features</h2>
                            <ul>
                                <li>4-Piston Caliper</li>
                                <li>All-new Code design based on Guide architecture</li>
                                <li>Designed specifically to handle heavy-duty demands</li>
                            </ul>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default Features;
