 import React from 'react'
 import { useSelector } from 'react-redux'
 import { useDispatch } from 'react-redux'
 import { NavLink } from 'react-router-dom'
 import { delItem } from '../redux/actions/index'


 const Cart = () => {
     const state = useSelector((state) => state.addItem)
     const dispatch = useDispatch()

     const handleClose = (item) => {
         dispatch(delItem(item))
     }

     const cartItems = (cartItem) => {
         return (
             <div className='px-4 py-5 my-5 rounded-5' key={cartItem.id}>
                 <div className='containern py-4'>
                     <button onClick={()=>handleClose(cartItem)} className='btn-close 
                  float-end' aria-label='Close'></button>
                     <div className='row justify-content-center'>
                         <div className='col-md-4'>
                             <img src={cartItem.img} alt={cartItem.title} height="200px"
                                 width="180px" />
                         </div>
                         <div className='col-md-4'>
                             <h3>{cartItem.title}</h3>
                             <p className='lead fw-bold'>{cartItem.price}CFA</p>
                         </div>
                     </div>
                 </div>
             </div>
         );
     }


     const emptycart = () => {
         return (
             <div className='px-4 my-5 bg-light rounded-3 py-5'>
                 <div className='container py-4'>
                     <div className='row'>
                         <h3>MERCI! de remplire votre panier</h3>
                     </div>
                 </div>
             </div>
         );
     }

     const button = () => {
         return (
             <div className='container'>
                 <div className='row'>
                     <NavLink to="/checkout" className="btn bnt outline-secondary mb-5
             w-25 mx-auto"> Passer à la caisse</NavLink>
                 </div>
             </div>
         );
     }

     return (
         <>
             {state.length === 0 && emptycart()}
             {state.length !== 0 && state.map(cartItems)}
             {state.length !== 0 && button()}
         </>
     )
 }

 export default Cart


