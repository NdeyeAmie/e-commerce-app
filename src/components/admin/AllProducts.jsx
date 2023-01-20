// import React from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import Dashboard from './Dashboard'

// const AllProducts = () => {
//   return (
//     <>
//      <Dashboard/> 
  
//   <section>
//       <Container>
//         <Row>
//             <Col lg="12">
//             <table className='table'>
//                 <thead >
//                     <tr>
//                         <th>Image</th>
//                         <th>Title</th>
//                         <th>Categorie</th>
//                         <th>Price</th>
//                         <th>Action </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td><img src='/assets/abaya.png' alt='' className='td'/></td>
//                         <td>Abaya</td>
//                         <td>abaya</td>
//                         <td>10000FCA</td>
//                         <td>
//                             { " "}
//                             <button className='btn btn-outline'>Delete</button></td>
//                     </tr>
//                 </tbody>
//             </table>
//             </Col>
//         </Row>
//       </Container>
//     </section>
//     </>
//   )
// }

// export default AllProducts
 import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
 
 const AllProducts = () => {
const [products, setProducts] = useState([]);

useEffect(() =>{
  getProducts()
}, []);

const getProducts = async () =>{
let result= await fetch("/api/products");
result = await result.json();
setProducts(result);
}

const deleteProduct = async (id) => {
 console.warn(id)
 let result = await fetch(`/api/products/${id}`, {
  method:"Delete"
 });
 result = await result.json();
 if(result) {
  getProducts()
 }
}

   return (
     <div className='product-list'>
       <h3>Produit Liste</h3>
       <hr/>
       <ul>
       <li>ID</li>
        <li>Image</li>
        <li>Title</li>
        <li>Description</li>
        <li>Price</li>
        <li>countInStock</li>
        <li>Rating</li>
        <li>NumReviews</li>
        <li>Operateu</li>
       </ul>
       {
        products.map((item,index) =>
        <ul key={item._id}>
          <li>{index +1}</li>
        <li>
          {/* <img src={item.img} alt=""/> */}
          {item.img}</li>
        <li>{item.title}</li>
        <li>{item.desc}</li>
        <li>{item.price}CFA</li>
        <li>{item.countInStock}</li>
        <li>{item.rating}</li>
        <li>{item.numReviews}</li>
        <li><button className="btn btn-outline"  onClick={() => deleteProduct(item._id)}>Delete</button>
        <hr/>
        <Link to={"/update/"+item._id} className="btn btn-outline" >Update</Link>
        </li>
       </ul>
        )
       }
     </div>
   )
 }
 
 export default AllProducts
