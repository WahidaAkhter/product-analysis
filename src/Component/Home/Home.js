
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReview from '../../Hook/useReview';
import image from '../../images/banner_car.png';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
  const [reviews] = useReview();
  return (
    <div className='mt-5'>
      <Container>
        <Row>
          <Col>
            <p className='headline1'>Rent out a Bike and explore</p>
            <h1 className='headline2'>Save time with our rental website</h1>
            <p>"Rent a bike and take bike riding trip alone or with your friends to explore its beauty."</p>
            <div className='d-flex'>
              <button className='px-4 py-2 btn-color1'>Rent Bike</button>
              <button className='ms-3 px-4 py-2 btn-color2'>Explore More</button>
            </div>

          </Col>
          <Col>
            <img className=' img-part ms-5' src={image} alt="" />
          </Col>
        </Row>
      </Container>



      <div className='mt-5 text-center'>
        <h4 className='mt-5'>User Review</h4>
        <h1 className='fw-bold'>Our Customers Credential</h1>
        <div className='row row-cols-1 row-cols-md-3'>
          {
            reviews.slice(0, 3).map(review => <Review
              key={review.id}
              review={review}
            ></Review>)
          }

        </div>
        <Link to="/reviews">
          <button className='btn-color1 my-3'>See All Review</button>
        </Link>
      </div>
    </div>






  );
};

export default Home;