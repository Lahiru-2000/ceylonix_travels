"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const CeylonixAbout = ({ aboutImage }) => {
  const features = [
    { title: 'Easy & Hassle-Free Booking', text: 'We make the process simple, fast, and convenient for international travelers.' },
    { title: 'Personalized Travel Support', text: 'Every journey is handled with care to match your expectations.' },
    { title: 'Experienced Local Experts', text: 'Our guides bring deep knowledge and friendly service to every trip.' },
    { title: 'High Quality Service Standards', text: 'We focus on comfort, safety, and customer satisfaction.' }
  ];

  return (
    <section className="ceylon-about ceylon-section" style={{
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="ceylon-container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="about-visual position-relative">
              {/* This will mimic the floating image design */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  // borderRadius: '20px',
                  overflow: 'hidden',
                  // border: '5px solid rgba(255, 0, 0, 0.05)',
                  // boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                }}
              >
                <img src={aboutImage} alt="Sri Lanka experience" className="img-fluid" />
              </motion.div>

              {/* Decorative gradient blur */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle, rgba(212, 0, 255, 0.1) 0%, transparent 70%)',
                zIndex: 0
              }}></div>
            </div>
          </div>

          <div className="col-lg-6 ps-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="ceylon-subtitle">Get About Us</span>
              <h2 className="ceylon-title text-white" style={{  fontWeight: 600, fontStyle: 'semibold' }}>
                
                We Are Dedicated To Creating The Best Travel Experiences In Sri Lanka
              </h2>
              <p className="text-white-100 mb-4" style={{ fontSize: '15px' }}>
                At Ceylonix, we are passionate about delivering unforgettable travel experiences for visitors from around the world. 
                With deep local expertise and a commitment to quality service, we ensure every journey is smooth, comfortable, 
                and filled with meaningful moments.
                <br/><br/>
                From cultural landmarks to breathtaking natural beauty, we carefully plan each trip to give you a complete and authentic Sri Lankan experience.
              </p>

              <hr style={{ color: 'white', width: '100%', height: '1px', borderRadius: '5px' }} />

              <ul className="m-0 p-0" style={{ listStyle: 'none' }}>
                {features.map((feature, index) => (
                  <li key={index} className="d-flex align-items-start gap-3 mb-4">
                    <FaCheckCircle className="mt-1" color="#FC0FC0" size={20} />
                    <div>
                      <h4 className="text-white m-0" style={{ fontSize: '18px' }}>{feature.title}</h4>
                      <p className="text-white-100 small" style={{ fontSize: '15px', fontStyle: 'regular' }}>{feature.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="px-4 py-2 mt-2" style={{ color: '#FC0FC0', backgroundColor: 'white',borderRadius:"8px", border:"2px", borderColor:"#FC0FC0", font:"17px", fontWeight:"500" }}>Discover More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeylonixAbout;
