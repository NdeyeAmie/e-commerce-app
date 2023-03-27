 import { axiosInstance } from "../../contants/axios";
 import { CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../../contants/cardContants";


 export const addToCart = (id, qty) => async (dispatch, getState) => {
   const { data } = await axiosInstance.get(`/api/products/${id}`);
   dispatch({
     type: CART_REMOVE_ITEM,
     payload: {
       product: data._id,
       title: data.title,
       img: data.img,
       price: data.price,
       countInStock: data.countInStock,
       qty,
     },
   });

   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
 };

 export const removeFromCart = (id) => (dispatch, getState) => {
   dispatch({
     type: CART_REMOVE_ITEM,
     payload: id,
   });

   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
 };

  export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload:data});
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };

  export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };
