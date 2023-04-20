import React from 'react'
import "./style/Home.css"
import Bid from './image/bidding.jpeg';
import connect from './image/connect.png'
import Policy from './image/policy.avif'

const Home = () => {
  return (
    <>
    <section id="title" className="coloured-section">
      <div className="container-fluid">
        
        
        <h1 className="big-heading">Elevating Your Business to new heights</h1>
       
      </div>
    </section>
    <section id="features" className="white-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <i className="fa-solid fa-users-between-lines fa-3x"></i>
              <img src={Bid} alt="bidding" /><br></br>
            <h3 className="feature-title">Bidding system</h3>
            <p className="features-description">
              Bid from a long list of startups
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="col-lg-4">
            <i className="fa-solid fa-handshake fa-3x"></i>
            <img src={connect} alt="connect" /><br></br>
            <h3 className="feature-title">Connect</h3>
            <p className="features-description">
              Connect with your fellow startup creator and boost your ideas. A Place where ever Startup exists big or small this website is for all.
            </p>
          </div>

          <div className="col-lg-4">
          {/* <FontAwesomeIcon icon="fa-solid fa-users-between-lines fa-3x" /> */}
            <img src={Policy} alt="connect" /><br></br>
            <i className="fa-solid fa-user-magnifying-glass fa-2x"></i>
            <h3 className="feature-title">Policies</h3>
            <p className="features-description">
              Notification About Latest Policies for Startups Web Scrapped from Govenment startup Website
            </p>
          </div>
        </div>
      </div>
    </section>   
                      </>
  )
}

export default Home;
