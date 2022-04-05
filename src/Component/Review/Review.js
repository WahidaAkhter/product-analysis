import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css'
const Review = (props) => {
    const{review, name,  image, rating} = props.review;
    return (
        
            
<div className='container'>
<Col>
                <Card className='m-4 card-section'>
                    <Card.Img className="review-image mx-auto mt-5" src={image} />
                    <Card.Body>
                    <Card.Title><h3 className='text-center'>{name}</h3></Card.Title>
                    <Card.Text>
                    <h5 className='text-center reviews'> "{review}"</h5>
                    <p className='text-center rating'> Rating: {rating}</p>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
</div>
        
    );
};

export default Review;