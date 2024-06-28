import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productslist() {

  const[product,setProduct]=useState([])
   
  const fetchData = async ()=>{
  const data = await fetch('https://fakestoreapi.com/products')
           data.json().then(data=>setProduct(data))
  }
      useEffect( ()=>{
         fetchData()
      },[]) 
      console.log(product);


  return (
    <div>
    <Container className='mt-5'>
      <Row>
        <Col lg={6}>
        <img src="https://img.myloview.com/stickers/shopping-cart-icon-isolated-on-dark-background-700-250615200.jpg" alt="" width={450} />
        </Col>
        <Col lg={6} >
        <h2>Welcome to Your Shopping World <span className='text-danger'>E-Cart</span></h2>
        </Col>
      </Row>
    </Container>
    { product.length>0?
    <div className='p-4'>
      <Row>
        {
          product.map(i=>(
            <Col lg={3} md={4} sm={6}>
                 <Card style={{ width: '18rem' }}>
      <Card.Img style={{height :'360px'}} variant="top" src={i.image} />
      <Card.Body>
        <Card.Title>{i.title.length>35?i.title.slice(0,35)+"...":i.title}</Card.Title>
        <Card.Text>
         {i.category}
         <br/>
        <h5>$ {i.price} </h5> 
         <br/>
        <b> Rating: <span className={i.rating.rate >4 ?'text-success':i.rating.rate >3 ? 'text-warning':'text-danger'}>  {i.rating.rate} <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star-half-stroke"></i>
        <i class="fa-regular fa-star-half-stroke"></i> 
        </span></b>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
          )

          )
        }
      </Row>
    </div>
      :
    <div className='text-center m-4 text-danger'>
    <i class="fa-solid fa-spinner fa-spin fa-4x"></i>
    </div>

      }

    </div>
  )
}

export default Productslist
