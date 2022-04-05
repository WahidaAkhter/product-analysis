import React from 'react';
import './About.css'

const About = () => {
  return (
    <div>
      <div class="container mt-5">
        <div class="row row-cols-2">
          <div class="col">
            <img src="https://img.freepik.com/free-vector/personal-electric-transport-concept-illustration_335657-5367.jpg?t=st=1649128234~exp=1649128834~hmac=ed34288fbf7d24cd229f8ff51919e123aafc1e237bd610a36c4ae9bc4ef6a87e&w=740" alt="" />
          </div>
          <div class="col about">
            <h4>About Our Service</h4>
            <h1>Start your jouney and explore natures beauty with our service.</h1>
            <p> One of the best ways to spend sunny summer day to go bike riding ,but what to do if 
              you dont have your own bike here we are here to make your dream come true.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;