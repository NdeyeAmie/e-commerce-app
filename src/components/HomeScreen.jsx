import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";
import Loader from "./Loading"
import Message from "./Message"
import Product from "./Product";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const cardItem = (item) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((cardItem) => (
            <Col key={item._id} md={3}>
              <Product product={products} />
            </Col>
          ))}
        </Row>
      )}
  

    </>
  )
}
}

export default HomeScreen
