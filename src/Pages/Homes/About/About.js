import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
// import Footer from '../../../Shared/Footer/Footer';
// import Header from '../../../Shared/Header/Header';
import './About.css'
const About = () => {
    return (
      <div>
        <Header></Header>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                <h5 className='aboutus '> E-Krish-BD Website. A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</h5>
                </div>
                <div className='col-lg-6'>
                <img height="200" className='aboutimg'
      src="https://cdn.wallpapersafari.com/56/7/jVYJl5.jpg"
      alt="First slide"
    />
                </div>

            </div>
            
        </div>
        <Footer></Footer>
      </div>
    );
};

export default About;