import React,{ useState} from 'react'
import { Container, Row,Col, Form, FormGroup } from 'react-bootstrap'
import Dashboard from './Dashboard'
import {toast} from 'react-toastify'



const AddProducts = () => {
const [enterTitle, setEnterTitle] = useState("");
const [enterDescription, setEnterDescription] = useState("");
const [enterCategory, setEnterCategory] = useState("");
const [enterPrice, setEnterPrice] = useState("");
const [EnterProductImg, setEnterProductImg] = useState(null);
//const [loading, setLoading] = useState(false);



const addProduct = async(e) =>{
    e.preventDefault()

    const product={
        title: enterTitle,
        description: enterDescription,
        category: enterCategory,
        price: enterPrice,
        imgUrl: EnterProductImg
    }

    // const formData = new formData();
    // formData.apprend('photot' files);
    // const config = {
    //     hedaders:{
    //         'content-type':''
    //     }
    // }
    
    toast.success("product successfully added!");

 

    console.log(product);
}

  return (
    <>
  <Dashboard/>
  <section>
    <Container>
        <Row>
            <Col lg="12">
                <h4 className='mb-5'>Add Product</h4>
                <Form onSubmit={addProduct}>
                    <FormGroup className='form_group'>
                        <span>Product title</span>
                        <input type="text" className='htmlForm-control w-100' placeholder='Abaya' 
                        value={enterTitle} onChange={e => setEnterTitle(e.target.value)}
                        required/>
                    </FormGroup>
                    <FormGroup className='form_group'>
                        <span>Description</span>
                        <input type="text" className='htmlForm-control w-100' placeholder='Description.....'
                        value={enterDescription} onChange={e => setEnterDescription(e.target.value)}
                        required/>
                    </FormGroup>

                    <div className='d-flex align-items-center 
                    justify-content-between gap-5'>
                    <FormGroup className='form_group w-50'>
                        <span>Price</span>
                        <input type="number" className='htmlForm-control w-100' placeholder='1000CFA'
                        value={enterPrice} onChange={e => setEnterPrice(e.target.value)}
                        required/>
                    </FormGroup>

                    <FormGroup className='form_group w-50'>
                        <span>Category</span>
                        <select className='w-100 p-2' value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                            <option value="Abaya">Abaya</option>
                            <option value="Sac">Sac</option>
                            <option value="Chaussure">Chaussure</option>
                            <option value="Colle">Colle</option>
                        </select>
                    </FormGroup>
                    </div>
                    <div>
                    <FormGroup className='form_group'>
                        <span>Product Image</span>
                        <input className='htmlForm-control w-100' type="file"
                        onChange={e=> setEnterProductImg(e.target.files[0])}
                        required/>
                    </FormGroup>
                    </div>
                    <button className='btn btn-outline' type="submit">Add product</button>
                </Form>
            </Col>
        </Row>
    </Container>
  </section>
  
 
    </>
  )
}

export default AddProducts
