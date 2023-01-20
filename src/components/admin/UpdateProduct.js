/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import { toast } from "react-toastify";
import { useNavigate, NavLink, useParams } from "react-router-dom";


const UpdateProduct = () => {
  const [title, setTitle] = useState("");
//   const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [rating, setRating] = useState("");
  const [numReviews, setNumReviews] = useState("");
  // eslint-disable-next-line no-unused-vars
const params = useParams();
const navigate = useNavigate();

  useEffect(()=>{
    getProductDetails();
  }, []);

 const getProductDetails = async () =>{
    console.warn(params);
    let result = await fetch (`http://localhost:5000/api/products/${params.id}`);
    result = await result.json();
    // console.warn(result);
    setTitle(result.title);
    setDesc(result.desc);
    setPrice(result.price);
    setCountInStock(result.countInStock);
    setRating(result.rating);
    setNumReviews(result.numReviews);
    
 }

  const updateProduct = async () => {
     console.warn(title, desc, price, countInStock, rating, numReviews);
    let result = await fetch(`http://localhost:5000/api/products/${params.id}`,{
     method: 'Put',
     body:JSON.stringify({title, desc, price, countInStock, rating, numReviews}),
     headers : {
        "Content-Type":"Application/json"
     } 
    });
    result = await result.json();
   if(result) {
    navigate('/dashboard/all-products')
   } 
  };

//   toast.success("product successfully added!");

  return (
    <>
    <Dashboard/>
      <div className="container" p-5>
        <h4 className="mb-5">UpdateProduct</h4>
        <form onSubmit={updateProduct} className="form-add p-2">
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
         {/* <div className='col-md-9'>
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
             </div> */}
              

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
           {/* <NavLink to="/dashboard/all-products">  */}
          <button className="btn btn-outline" type="submit">
           Update
          </button>
           {/* </NavLink>  */}
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
