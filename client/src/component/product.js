import React from 'react'
import {Link} from "react-router-dom"
import  ReactStars from "react-rating-stars-component";



const product = ({product}) => {
  console.log(product.reviews.rating);
  const options = {
    value: product.reviews.rating,
    edit:false,
    readOnly: true,
    precision: 0.5,
};

return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} reviews)
        </span>
      </div>
      <span>{`Efficiency : ${product.efficiency} `}</span>
      <span>{`Valuation : ${product.valuation} Cr`}</span>
    </Link>
  )
}

export default product
