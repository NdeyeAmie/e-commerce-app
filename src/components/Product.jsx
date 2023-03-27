 import React, {useState, useEffect} from 'react'
 import { axiosInstance } from '../contants/axios';
 import { NavLink } from 'react-router-dom';
import Header from "./Header"
import Rating from './Rating';
 //import products from '../Data'

 const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
      const fetchProducts = async () =>{
        const {data} = await axiosInstance.get("/api/products");
        setProducts(data)
      }
      fetchProducts();
   }, []);
    const cardItem = (item) => {
    // console.log(item);
    <Header/>
     return (
       <div className="card my-5 py-4" key={item._id} style={{ width: "18rem", margin: "15px" }}>
         <img src={item.img} className="card-img-top" alt={item.title} />
         <div className="card-body text-center">
           <h5 className="card-title">{item.title}</h5>
           <div className='rating'>
            < Rating 
           rating={item.rating}
            numReviews={`${item.numReviews} reviews`}
            />
           <p className='lead'> {item.price}FCA</p>
           <NavLink to={`/api/products/${item._id}`} className="btn 
            btn-outline-secondary">Voir maintenant</NavLink>
         </div>
       </div>
       </div>
     );
   }

   return (
     <div>
      
       <div className='container py-5 m-5'>
         <div className='row'>
           <div className='col-12 text-center'>
             <h1>Produit</h1>
             <hr />
           </div>
         </div>
       </div>
       <div className='container'>
         <div className='row'>
           {products.map(cardItem)}
         </div>
       </div>
     </div>
   )
 }

 export default Product



