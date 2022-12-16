import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../redux/actions/cartAction"
import CheckoutStep from "../components/CheckoutStep";
import { useNavigate } from "react-router-dom";


const Payment = () => {
    //const PaymentScreen = ({ history }) => {
        const navigate = useNavigate();
        const cart = useSelector((state) => state.cart);
        const { shippingAddress } = cart;
        if (!shippingAddress.address) {
         navigate("/shipping");
        }
        const dispatch = useDispatch();
        const [paymentMethod, setPaymentMethod] = useState("livraison");
        const submitHandler = (e) => {
          e.preventDefault();
          dispatch(savePaymentMethod(paymentMethod));
         navigate("/placeorder");
        };
        return (
          <>
            <CheckoutStep step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label as="legend">Selectionner votre methode Payment</Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Livraison ou Carte Credit"
                    id="livraison"
                    name="paymentMethod"
                    value="livraison"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  ></Form.Check>
                </Col>
              </Form.Group>
              <Button type="submit" variant="primary">
                Envoyer
              </Button>
            </Form>
          </>
        );
      };
      
      

export default Payment