import axios from "axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  ALL_POLICY_FAIL,
  ALL_POLICY_REQUEST,
  ALL_POLICY_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";
import { governementPolicyReducer } from "../reducers/productReducer";

// Get All Products
export const getProduct = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      const {data} = await axios.get('https://weegro.onrender.com/api/products');
      console.log(data);
      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data.results,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`https://weegro.onrender.com/api/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const governementPolicy = () => async(dispatch) => {
  try {
    dispatch({ type: ALL_POLICY_REQUEST });

    const data = await axios.get('https://localhost:4000/api/webscrapping');
    console.log(data.data.policy[0]);
    dispatch({
      type:ALL_POLICY_SUCCESS,
      payload: data.data.policy[0],
    });
  } catch (error) {
    dispatch({
      type: ALL_POLICY_FAIL,
      payload: error.response.data.message,
    });
  }
};


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
