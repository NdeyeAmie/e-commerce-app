import React, { useState,useEffect } from 'react'
import axios from "axios";
import Dashboard from './Dashboard'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'



const AddProducts = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [countInStock, setCountInStock] = useState("");
    const [rating, setRating] = useState("");
    const [numReviews, setNumReviews] = useState("");
   

    const addProduct =  (event) => {
       
            event.preventDefault();
            
                     const config = {
                         Headers : {
                             "Content-Type": "application/json",
                         },
                     };
        
            axios.post('/api/products/post', { 
                title,desc,price,imgUrl,countInStock,rating,numReviews },
                config
                )
              .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error(error);
              });
       
        

        // toast.success("product successfully added!");



    //    console.log(addProduct);
    };

    return (
        <>
            <Dashboard />
            <div className='container' p-5>
            <h4 className='mb-5'>Add Product</h4>
            <div className='col-md-9'>
                {imgUrl && <div className='text-center'>
                    <img
                        src={URL.createObjectURL(imgUrl)}
                        alt="product photo" className='img-img-responsive'
                        height="200px" />
                </div>}
                <div className='pt-2'>
                    {imgUrl ? imgUrl.title : "upload photo"}
                    <input type="file" title='photo' accept='image/*'
                        onChange={e => setImgUrl(e.target.files[0])}
                        required />
                </div>
            </div>
            <form onSubmit={addProduct} className="form-add p-2">

                <div className='title'>
                    <p>Product title</p>
                    <input type="text" className='htmlForm-control w-50' placeholder=''
                        value={title} onChange={e => setTitle(e.target.value)}
                        required />
                </div>
                <div className='desc'>
                    <p>Description</p>
                    <input type="text" className='htmlForm-control w-50' placeholder='desc.....'
                        value={desc} onChange={e => setDesc(e.target.value)}
                        required />
                </div>
                <div className='price'>
                    <p>Price</p>
                    <input type="number" className='htmlForm-control w-50' placeholder=''
                        value={price} onChange={e => setPrice(e.target.value)}
                        required />
                        </div>
                        <div className='cate'>
                    <p>countInStock</p>
                    <input type="number" className='htmlForm-control w-50' placeholder=''
                        value={countInStock} onChange={e => setCountInStock(e.target.value)}
                        required />
                </div>
                <div className='rating'>
                    <p>Rating</p>
                    <input type="number" className='htmlForm-control w-50' placeholder=''
                        value={rating} onChange={e => setRating(e.target.value)}
                        required />
                </div>
                <div className='numReviews'>
                    <p>NumReviews</p>
                    <input type="number" className='htmlForm-control w-50' placeholder=''
                        value={numReviews} onChange={e => setNumReviews(e.target.value)}
                        required />
                </div>
                {/* <NavLink to="/dashboard/all-products"> */}
                <button className='btn btn-outline' type="submit">Add product</button>
                {/* </NavLink> */}
            </form>
            </div>
        </>
    )
}

export default AddProducts



