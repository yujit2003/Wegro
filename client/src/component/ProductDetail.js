import React, { Fragment, useEffect, useState } from "react";
import "./style/ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import {
  clearErrors,
  getProductDetails,
} from "./actions/productAction";
import  ReactStars from "react-rating-stars-component";


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
              <div className="detailsBlock-2">
                <ReactStars {...options} />
                <span className="detailsBlock-2-span">
                  {" "}
                  ({product.numOfReviews} Reviews)
                  {product.reviews &&
                  product.reviews.map((item, i) => (
                    <>
                    <p>rating :{item.rating}</p><br></br>
                    <p>comment :{item.comment}</p>
                    </>
                  ))}
                </span>
              </div>
              <div className="detailsBlock-3">
                <h1>{`Startup Profit -> ${product.profit}`}</h1>
                <h1>{`Strartup Efficiency predicted from model -> ${product.efficiency}`}</h1>
                <a href = "http://127.0.0.1:5000/predict"> Predict now</a>
                <div className="detailsBlock-3-1">
                </div>
              </div>

              <div className="detailsBlock-4">
                Category : <p>{product.category}</p>
              </div>
            </div>
          </div>
        
        </Fragment>
  )
};

export default ProductDetails;