import React, { Fragment, useEffect, useState } from "react";

import "./style/bidding.css"
import bidding from './image/bidding.svg'
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom';
import {getProduct} from "./actions/productAction";



const Bidding = () => {
  const [count,setCount] = useState(0);

  const dispatch = useDispatch();
  // we are using useSelector for fetching data from redux which was stored in the backend
const {loading, error, products} = useSelector(
  (state) =>{
    return state.products
  }
);
useEffect((id) => {
  dispatch(getProduct());
  console.log(count)
}, [dispatch]);

  return (
    <div> 
      <div class="container">
      <header>
        <h1>Bidding Rankings of Startups</h1>
      </header>
      <div class="wrapper">
        <table>
          <thead>
            <tr>
              <th>Startup</th>
              <th>Category</th>
              <th>Max Bidding Amount</th>
              <th>Inc Bid</th>
            </tr>
          </thead>
          <tbody>
             {products &&
               products.map((product) => (
                <tr>
                <td class="team">{product.name}</td>
                <td class="team">{product.category}</td>
                <td class="points">{product.valuation}</td>
                <button onClick={(e)=>setCount(product.valuation+1)}> BID Here</button>
              </tr>
               ))}
            
          </tbody>
        </table>
      </div>
    </div>

    </div>
  )
}

export default Bidding
