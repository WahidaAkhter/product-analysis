import { useState } from "react";
import "./Navbar.css";
import logo from "../../asset/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className=" container nav">
                    <Link to="/">
                        <img src={logo} alt="WebSite Logo" />
                    </Link>
                    <div className="nav_item">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/review">Review</Link>
                            </li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    {open && (
                        <div className="nav_mob">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/review">Review</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div onClick={() => setOpen(!open)} className="toggoler">
                        {open ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
