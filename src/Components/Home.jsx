import React from 'react';
import Navbar from '../Components/Navbar';
import Person from '../Components/Assets/person.png';
import { IoMdArrowDropright } from "react-icons/io";


const Home = () => {
  return (
       <div className="home-container">
      <Navbar />
      <div className='horizontal'>
        <div className="home-text-section">
          <h1 className="primary-heading">
          <span className="color-part-1">Subscribe Now to our</span> <span className="color-part-2">  Newsletter</span>
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum corporis id cumque maxime! Illum cum amet dignissimos error. Illo sequi eos accusamus dolorem sint quod aliquid sapiente, natus impedit velit?
             </p>

             <div className="input-container">
          <input type="text" className="input-field" placeholder="Name" />
          <input type="email" className="input-field" placeholder="Email" />
          <button className="submit-button">
            Send <IoMdArrowDropright />
          </button>
           </div>
          </div>
          <div className="home-banner">
                  <img src={Person} alt="" />
        </div>
        
      </div>
      </div>
  );
};

export default Home;