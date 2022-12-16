import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItem } from '../redux/actions'
import { saveShippingAddress } from '../redux/actions/cartAction'
import CheckoutStep from './CheckoutStep'

const Checkout = () => {
const state = useSelector((state) => state.addItem)

const [username, setUsername] = useState("shippingAddress.usename");
const [number, setNumber] = useState("");
const [address, setAddress] = useState("");
const [region, setRegion] = useState("");
const [ville, setVille] = useState("");

//const state = useSelector((state) => state.cart)
const  {shippingAddress}  = addItem;
const dispatch=useDispatch();
const navigate= useNavigate();



const submitHandler = (e) => {
  e.preventDefault()

  dispatch(saveShippingAddress({username,number,address,region,ville}))
  navigate("/payment")
}

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">{item.price}CFA</span>
      </li>
    );
  }

  return (
    <>
      <div className='container my-5'>
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-secondary">Votre panier </span>
              <span className="badge bg-secondary rounded-pill">{state.length}</span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>{total}CFA</strong>
              </li>
            </ul>

            {/* <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn outline-secondary">Rédiger</button>
          </div>
        </form> */}
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Address de facturation</h4>
            <CheckoutStep step1 step2/>
            <form className="needs-validation" novalidate="" onSubmit={submitHandler}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="lastName" className="form-label">Username</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Entrez voter nom" 
                  value={username} onChange={e => setUsername(e.target.value)}
                   required />
                </div>

                <div className="col-12">
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">Numéro de téléphone mobile <span className="text-muted"></span></label>
                    <input type="number" className="form-control" id="address2" 
                    value={number} onChange={e => setNumber(e.target.value)} placeholder="+221..." />
                  </div>
                  <label htmlFor="address" className="form-label">Addresse</label>
                  <input type="text" className="form-control" id="address"
                  value={address} onChange={e => setAddress(e.target.value)} placeholder="" required="" />
                  <div className="invalid-feedback">
                    Veuillez indiquer votre addresse de livraison.
                  </div>
                  <label htmlFor="address" className="form-label">Region</label>
                  <input type="text" className="form-control" id="address"
                  value={region} onChange={e => setRegion(e.target.value)}
                   placeholder="Entrez votre region" required="" />
                  <div className="invalid-feedback">
                    Veuillez indiquer votre Region de livraison.
                  </div>
                  <label htmlFor="address" className="form-label">Ville</label>
                  <input type="text" className="form-control" id="address" 
                  value={ville} onChange={e => setVille(e.target.value)}
                  placeholder="Entrez votre ville" required="" />
                  <div className="invalid-feedback">
                    Veuillez indiquer votre vile de livraison.
                  </div>
                </div>
              </div>
              <hr className="my-4" />

              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="same-address" />
                <label className="form-check-label" htmlFor="same-address">L'addresse de livraison est la meme que l'addresse de facturation</label>
              </div>


              <hr className="my-4" />
              
              <button className="w-100 btn btn-secondary btn-lg" type="submit">Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
