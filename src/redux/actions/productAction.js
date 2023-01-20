import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../../contants/productContants";

export const productAdd = (title,img, desc, price, countInStock, rating, numReviews) =>
  async (dispatch) => {
    console.log(title,img, desc, price, countInStock, rating, numReviews);
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
      //const config = { headers: { "content-Type": "application/json" } };
      const { data } = await axios.post( "/api/products/post",
        { title,img, desc, price, countInStock, rating, numReviews },
        //config
      );
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });

      localStorage.setItem("productInfo", JSON.stringify(data));
    } catch (error) {
    //   console.log(error);
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
