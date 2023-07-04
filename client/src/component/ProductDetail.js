import React, { Fragment, useEffect, useState } from "react";
import "./style/ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import {
  clearErrors,
  getProductDetails,
} from "./actions/productAction";
import  ReactStars from "react-rating-stars-component";
import Detailimage from "./image/detail.jpg"


// const product = {
//       _id:"123",
//       name: "FreshBiz",
//       efficiency: "8",
//       profit: "3",
//       dept: "7",
//       services:"food",
//       category:"food",
//       valuation:"95",
//       rating:"2"
//   };

const ProductDetails = () => {
  const dispatch = useDispatch();

  const params  = useParams();
  
  const { product} = useSelector(
    (state) => state.productDetails
    );
    
    useEffect(() => {
        dispatch(getProductDetails(params.id));
    }, [dispatch, params.id]);

    
    const options = {
      size: "large",
      value: product.rating,
      readOnly: true,
      precision: 0.5,
    };
  return (
        <Fragment>
          <div className="ProductDetails">
            <div>
              <div className="detailsBlock-1">
                <h2>Startup Name : {product.name}</h2>
                <p>Startup ID # {product._id}</p>
              </div>
              <div className="detailsBlock-4">
                Category : <p>{product.category}</p>
              </div>
              <div className="detailsBlock-2">
                {/* <ReactStars {...options} /> */}
              </div>
              <div className="detailsContainer">
                  <img src={Detailimage} alt="connect" /> 
                <div className="detailstartup">
                  <h4>{`Startup Valuation -> ${product.valuation} USD`}</h4>
                  <h4>{`Startup Funding Rounds -> ${product.funding_rounds}`}</h4>
                  <h4>{`First Funding at: -> ${product.age_first_funding} yrs`}</h4>
                  <h4>{`Last Funding at: -> ${product.age_last_funding} yrs`}</h4>
                </div>
                <div className="efficiency">
                  <p>{`Strartup Efficiency predicted from model -> ${product.efficiency} You Have higher chance to generate profit from this startup`}</p>
                </div>
              </div>

                {/* <a href = "http://127.0.0.1:5000/predict"> Predict now</a> */}

              
              <div className="comment_container">

                  </div>
              <div className="reviews">
                      ({product.numOfReviews} Reviews)
                      {product.reviews &&
                      product.reviews.map((item, i) => (
                        <>
                        <p>Name : {item.name}</p>
                        {item.comment}
                        </>
                      ))} 
                </div>
                  </div>
          </div>
        
        </Fragment>
  )
};

export default ProductDetails;