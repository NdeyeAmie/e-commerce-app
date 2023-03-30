/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading';
import Message from '../Message';
import Dashboard from "./Dashboard";
// import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { productAdd } from "../../redux/actions/productAction";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [rating, setRating] = useState("");
  const [numReviews, setNumReviews] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const productadd = useSelector((state) => state.productadd);
  // eslint-disable-next-line no-unused-vars
  const {error, loading,productInfo} = productadd;

  const addProduct = (e) => {
    e.preventDefault();
    //dispatch
    
    dispatch(productAdd(title,img, desc, price, countInStock, rating, numReviews));
      
  };

  //toast.success("product successfully added!");

  return (
    <div className="my-5 py-5">
    <Dashboard/>
      <div className="container" p-5>
        <h4 className="mb-5">Add Product</h4>
        {error && <Message variant="danger">{error}</Message>}
              {loading && <Loading />}
              {message && <Message variant="danger">{message}</Message>}
        <form onSubmit={addProduct} className="form-add p-2">
          <div className="title">
            <p>Product title</p>
            <input
              type="text"
              className="htmlForm-control w-50"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
         <div className='col-md-9'>
                 {img  && <div className='text-center'>
                     <img
                         src={URL.createObjectURL(img)}
                         alt="product photo" className='img-img-responsive'
                         height="200px" />
                 </div>}
                 <div className='pt-2'>
                     {img ? img.title : "upload photo"}
                     <input type="file" title='photo' accept='image/*'
                         onChange={e => setImg(e.target.files[0])}
                         required />
                 </div>
             </div>
              

          <div className="desc">
            <p>Description</p>
            <input
              type="text"
              className="htmlForm-control w-50"
              placeholder="desc....."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </div>
          <div className="price">
            <p>Price</p>
            <input
              type="number"
              className="htmlForm-control w-50"
              placeholder=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="cate">
            <p>countInStock</p>
            <input
              type="number"
              className="htmlForm-control w-50"
              placeholder=""
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              required
            />
          </div>
          <div className="rating">
            <p>Rating</p>
            <input
              type="number"
              className="htmlForm-control w-50"
              placeholder=""
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div className="numReviews">
            <p>NumReviews</p>
            <input
              type="number"
              className="htmlForm-control w-50"
              placeholder=""
              value={numReviews}
              onChange={(e) => setNumReviews(e.target.value)}
              required
            />
          </div>
           <NavLink to="/dashboard/all-products"> 
          <button className="btn btn-outline" type="submit">
            Add product
          </button>
           </NavLink> 
        </form>
      </div>
    </div>
  );
};

export default AddProducts;

// <input type="file" name="file" id="file_up"
// onChange={e => setImg(e.target.files[0])} />
// {
//     loading ? <div id="file_img"></div>

//     :<div id="file_img" >
//         <img src={img ? img.url : ''} alt="" />
//         {/* <span onClick={handleSup}>X</span> */}
//     </div>
// }
