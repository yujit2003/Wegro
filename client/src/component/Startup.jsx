import React, { Fragment, useEffect, useState } from "react";
import "./style/startup.css"

// first step
import { useSelector, useDispatch } from "react-redux";

import {useParams} from 'react-router-dom';

// second step
import {
  clearErrors,
  getProduct,
} from "./actions/productAction";

const Startup = () => {

  // 3rd  step
  const dispatch = useDispatch();
  // we are using useSelector for fetching data from redux which was stored in the backend
const {loading, error, products} = useSelector(
  (state) =>{
    return state.products
  }
  );
  useEffect(() => {
    dispatch(getProduct());
    console.log(products)
}, [dispatch])


  return (
    <div>
      <div class="container">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            <i class="fa fa-search"></i>
            <input
              type="text"
              class="form-control"
              placeholder="Have a question? Ask Now"
            />
            <button class="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </div>

    <h1 class="interlinking-heading">Connect With other Startups and Grow Together</h1>
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="career-search mb-60">
            <div class="filter-result">
              <div
                class="job-box d-md-flex align-items-center justify-content-between mb-30"
              >
                <div
                  class="job-left my-4 d-md-flex align-items-center flex-wrap"
                >
                  <div
                    class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex"
                  >
                    UX
                  </div>
                  <div class="job-content">
                    <h5 class="text-center text-md-left">Brand Lift</h5>
                    <ul
                      class="d-md-flex flex-wrap text-capitalize ff-open-sans"
                    >
                      <li class="mr-md-4">
                        <i class="zmdi zmdi-pin mr-2"></i> Category:
                      </li>
                      <li class="mr-md-4">
                        <i class="zmdi zmdi-time mr-2"></i>Argiculture
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="job-right my-4 flex-shrink-0">
                  <a
                    href="#"
                    class="btn d-block w-100 d-sm-inline-block btn-primary"
                    >Connect</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Startup
