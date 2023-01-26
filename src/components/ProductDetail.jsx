//  import React from 'react'
//  import { useState, useEffect } from 'react';
//  import axios from "axios";
//  import { NavLink, useParams } from 'react-router-dom'
//  import { useDispatch } from 'react-redux'
//  import { addItem } from '../redux/actions/index'
//  //import products from '../Data';

//  import Loading from '../components/Loading';
//  import Message from './Message';

//  const ProductDetail = () => {
//    const [cartBtn] = useState("Add to Cart")

//    const { id } = useParams();

//    //const thisProduct = products.find((prod) => prod.id === id);
//  //
//  const [thisProduct, setProduct] = useState({});
//     useEffect(() =>{
//       const fetchProduct = async () =>{
//         const {data} = await axios.get(`/api/products/${id}`);
//         setProduct(data)
//       }
//       fetchProduct();
//    }, [id]);

//    const dispatch = useDispatch()
//     const { loading, error} = thisProduct

//     const handleCart = (thisProduct) => {
//       if (cartBtn === "Add to Cart") {
//         dispatch(addItem(thisProduct))
// //   //     //setCartBtn("Remove from Cart")
//      }
//    else {
// //   //     //dispatch(delItem(thisProduct))
// //   //     //setCartBtn("Add to Cart")
//       }
//   }

//    return (

//      <div>
//        { loading ? (
//          <Loading/>
//        ): error ? (
//         <Message variant={"danger"}>{error}</Message>
//        ):(
//        <div className='container my-5 py-3'>
//          <div className='row'>
//            <div className='col-md-6 d-flex justify-content-center mx-auto thisProduct'>
//              <img src={thisProduct.img} alt={thisProduct.title} height="400px" />
//            </div>
//            <div className='col-md-6 d-flex flex-column justify-content-center'>
//              <h1 className='display-5 fw-bold'> {thisProduct.title}</h1>
//              <hr />
//              <h2 className='my-4'>{thisProduct.price}</h2>
//              <p className='lead'>{thisProduct.desc}</p>

//              <NavLink onClick={() => handleCart(thisProduct)} className='btn
//             btn-outline-secondary my-5'>{cartBtn}</NavLink >
//            </div>
//          </div>
//        </div>
//         )}
//      </div>
//    )
//  }

//  export default ProductDetail

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Message from "./Message";
import Rating from "./Rating";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  // const [setCartBtn] = useState("remove to cart");
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();

  //    //const thisProduct = products.find((prod) => prod.id === id);
  //  //
  const [thisProduct, setProduct] = useState({});
  //console.log(thisProduct);
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const dispatch = useDispatch();
  const { loading, error } = thisProduct;

  const handleCart = (thisProduct) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(thisProduct, qty));
      navigate(`/cart/${thisProduct}?qty=${qty} `);
      // setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(thisProduct, qty));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <div className="container single-product py-5 m-5">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row ">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={thisProduct.img} alt={thisProduct.title} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className='display-5 fw-bold'>{thisProduct.title}</div>
                  </div>
                  <p>{thisProduct.desc}</p>
                  {/* <span>{thisProduct.price}CFA</span> */}
                  <div className="product-count col-lg-7">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>{thisProduct.price}CFA</span>
                    </div>
                    <hr />
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {thisProduct.countInStock > 0 ? (
                        <span>In stock</span>
                      ) : (
                        <span>unavailable</span>
                      )}
                    </div>
                    <hr />
                    <div className="flex-box d-flex justify-content-between align-items-">
                      <h6>Reviews</h6>
                      <Rating
                        value={thisProduct.rating}
                        text={`${thisProduct.numReviews} reviews`}
                      />
                    </div>
                    <hr />
                    {thisProduct.countInStock > 0 && (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(thisProduct.countInStock).keys()].map(
                              (x) => (
                                <option keys={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <hr />
                      </>
                    )}
                  </div>
                  <NavLink to="#">
                    <button
                      className="btn btn-outline col-12  border-0 p-3 "
                      onClick={() => handleCart(thisProduct)}
                    >
                      {cartBtn}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            {/*RATING*/}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3"> reviews</h6>
                <Message variant={"alert-info mt-3"}>NO Reviews</Message>
                <div className="mb-5 mb-mb-3 bg-light p-3 shadow-sm rounded">
                  <strong>Admin ndeye Amie</strong>
                  <Rating />
                  <span> Dec 07 2022</span>
                  <div className="alert alert-info mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas rem ratione consequuntur sapiente alias enim, natus
                    molestiae suscipit quaerat ipsam animi nemo, placeat in hic
                    quam ullam neque ad libero.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h6>Write A customer reviews</h6>
                <div className="my-4"></div>
                <form>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                      <option value="">Select...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Exellent</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                      row="3"
                      className="col-12 bg-light p-3 mt-2 border-0 rounded"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <button className="col-12 bg-black border-0 p-3 text-white">
                      SUBMIT
                    </button>
                  </div>
                </form>
                <div className="my-3">
                  <Message variant={"alert-warning"}>
                    Plelase{" "}
                    <Link to="/login">
                      " <strong>Login</strong> "
                    </Link>{" "}
                    to write a reviews{" "}
                  </Message>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
