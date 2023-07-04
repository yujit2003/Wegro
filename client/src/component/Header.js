import React from 'react'
import "./style/Home.css"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">WeeGro</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/"
                  >Home</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/bidding"
                  > Bidding</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/govtpol">Govenment Policies</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/api/products">Startups Detail</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/startup">Startups Zone</a>
              </li> */}
            </ul>
          </div>
        </nav>
    </>
  )
};

export default Header
