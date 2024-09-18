import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row ,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
import {addToCart} from '../redux/cartSlice'

function Wishlist() {

  const wishListItems=useSelector((state)=>state.wishlistReducer);
  console.log("==wishlist items in wishlist page==");
  console.log(wishListItems);
  const dispatch=useDispatch()
  const handleWishList=(item)=>{
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id))
  }
  
  
  return (
    <>
      <button className='btn btn-danger mt-4 ms-4'>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>
        <i class="fa-solid fa-arrow-left ms-3"></i>
        BACK TO HOME
        </Link>
      </button>
    <Row className='m-5'>
      {
        wishListItems?.length>0?
        wishListItems.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3} className='mb-5 ms-3' >
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} height="210px"/>
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,50)}...</p>
              <p style={{fontWeight:"900"}}>price:&#x20B9;{item.price}</p>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
    
            <Button variant="outline-success" onClick={()=>handleWishList(item)}><i class="fa-solid fa-cart-plus"></i></Button>
            <Button variant="outline-danger"><i class="fa-solid fa-trash" onClick={()=>dispatch(removeFromWishlist(item.id))}></i></Button>
            </div>
           
          </Card.Body>
        </Card>
          </Col>
        )):
       <div>
        <img height="200px" style={{marginLeft:"450px"}}
        src="https://imgs.search.brave.com/we7b8gsXeaS7wf3TZk6R9wJlJuln1uCyYhj5HwBCiHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80NS00/NTY4OTJfY2FydC1p/Y29uLXBuZy10cmFu/c3BhcmVudC15b3Vy/LWNhcnQtaXMtZW1w/dHkucG5n" alt="" />
       <h5 style={{marginLeft:"490px"}}>No items in cart</h5>
       </div>
        
       }
      </Row>
    </>
  )


}

export default Wishlist