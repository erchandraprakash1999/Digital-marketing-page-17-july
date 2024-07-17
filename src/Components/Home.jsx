import React from 'react';
import Navbar from '../Components/Navbar';
import Person from '../Components/Assets/person.png';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner">
                  <img src={Person} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Subscribe Now to our Newsletter
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis id cumque maxime! Illum cum amet dignissimos error. Illo sequi eos accusamus dolorem sint quod aliquid sapiente, natus impedit velit?
             </p>

             <div className="input-container">
          <input type="text" className="input-field" placeholder="Name" />
          <input type="email" className="input-field" placeholder="Email" />
          <button className="submit-button">Send</button>
        </div>

        </div>
      </div>
  );
};

export default Home;