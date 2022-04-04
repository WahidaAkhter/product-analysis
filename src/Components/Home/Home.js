import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../App";
import Features from "../component/features/Features";
import Header from "../component/header/Header";
import ReviewsDetails from "../component/review/ReviewsDetails";
import { Link } from "react-router-dom";

const Home = () => {
    const reviews = useContext(ThemeContext);
    return (
        <div>
            <Header />
            <Features />
            <div style={{ backgroundColor: "#000" }}>
                <div className="container">
                    <div style={{ paddingTop: "50px" }} className="home-Review">
                        <h2>User Review</h2>
                        {reviews.slice(0, 3).map((review) => (
                            <ReviewsDetails key={review.id} review={review} />
                        ))}
                        <Link to="/review">
                            <button>See All Review</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
