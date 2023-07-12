import React, {Fragment, useEffect } from 'react'
import "./style/ProductDetail.css"
import Product from "./product.js";
import {getProduct} from "./actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "./Loader.js";
import { useAlert } from "react-alert";
import image from "./image/policy.avif"



const product = {
  _id:"123",
    name: "FreshBiz",
    efficiency: "8",
    profit: "3",
    dept: "7",
    services:"food",
    category:"food",
    valuation:"95",
    rating:"2"
};
const   Home = () => {

    // const alert = useAlert();
  
    const dispatch = useDispatch();
    // we are using useSelector for fetching data from redux which was stored in the backend
  const {loading, error, products} = useSelector(
    (state) =>{
      return state.products
    }
  );
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
        ) : (
          <Fragment>
          <div className='heading'>
          <img src={image} alt="image of startup" />
          HERE BELOW IS LIST OF ALL STARTUPS...
          </div>
          <div className="container" id="container">
             {products &&
               products.map((product) => (
                 <Product  product={product} />
               ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home;
