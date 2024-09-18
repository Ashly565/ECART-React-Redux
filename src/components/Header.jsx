import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  // useSelector hook is used to acsess state available in store
  const wishlist=useSelector((state)=>state.wishlistReducer)
  console.log("==wishlist items==");
  console.log(wishlist);
  const cart=useSelector((state)=>state.cartReducer)
  
  
  return (
    <>
    <Navbar expand="lg" className="bg-primary">
      <Container>
      <i class="fa-solid fa-cart-shopping fa-bounce me-2" style={{color:"orange"}}></i>

        <Navbar.Brand style={{color:"#fff",fontSize:"23px"}}>
            <Link to='/' style={{color:"white",textDecoration:"none"}}>
            E-CART
            </Link>
            </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  >
                <Link to={'/cart'} style={{color:"white",textDecoration:"none",fontSize:"17px"}}>
                CART
                <Badge bg="secondary" className='ms-1 fs-6'>{cart?.length}</Badge>
                </Link>
               </Nav.Link>

            <Nav.Link >
                <Link to={'/wishlist'} style={{color:"white",textDecoration:"none",fontSize:"17px"}}>
                WISH LIST
                <Badge bg="secondary"  className='ms-1 fs-6'>{wishlist?.length}</Badge>

                </Link>
               
                </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header