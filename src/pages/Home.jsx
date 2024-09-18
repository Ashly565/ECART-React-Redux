import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';


function Home() {
  const response=useFetch("https://fakestoreapi.com/products");
  console.log("all products");
  console.log(response);
  
  const dispatch=useDispatch();
  
  return (
    <>
    <Row className='m-5'>
      {
        response?.length>0?
        response.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3} className='mb-5' >
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} height="210px"/>
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,50)}...</p>
              <p style={{fontWeight:"900"}}>price:&#x20B9;{item.price}</p>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
    
            <Button variant="outline-danger" onClick={()=>dispatch(addtowishlist(item))}><i class="fa-regular fa-heart" ></i></Button>
            <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}><i class="fa-solid fa-cart-plus"></i></Button>
            </div>
           
          </Card.Body>
        </Card>
          </Col>
        )):
        <div><p>No item Found</p></div>
       }

      </Row>
    </>
  )
}

export default Home