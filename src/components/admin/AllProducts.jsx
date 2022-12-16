import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Dashboard from './Dashboard'

const AllProducts = () => {
  return (
    <>
     <Dashboard/> 
  
  <section>
      <Container>
        <Row>
            <Col lg="12">
            <table className='table'>
                <thead >
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Categorie</th>
                        <th>Price</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src='/assets/abaya.png' alt='' className='td'/></td>
                        <td>Abaya</td>
                        <td>abaya</td>
                        <td>10000FCA</td>
                        <td>
                            { " "}
                            <button className='btn btn-outline'>Delete</button></td>
                    </tr>
                </tbody>
            </table>
            </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default AllProducts
