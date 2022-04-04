import React from "react";
import { Rating } from "react-simple-star-rating";

const ReviewsDetails = ({ review }) => {
    const { rate, ratting, name, description, location, status, title, image } =
        review;

    return (
        <div className="reviews">
            <div className="reviewer">
                <img src={image} alt="ReviewerPhoto" />
                <div className="reviewer__Name">
                    <p>{name}</p>
                    <span> {location} </span>
                </div>
            </div>
            <div className="review">
                <h4> {title} </h4>
                <div className="ratting">
                    <span style={{ marginRight: "12px" }}> {ratting} </span>
                    <Rating ratingValue={rate} readonly={true} size={22} />
                </div>

                <p>{description}</p>
            </div>
            <div className="status">
                <span> {status} </span>
            </div>
        </div>
    );
};

export default ReviewsDetails;
