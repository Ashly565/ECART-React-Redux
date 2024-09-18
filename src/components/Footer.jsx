import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{width:"100%",height:"250px",}} className='d-flex justify-content-center  align-items-center 
    flex-column mt-5 bg-primary'>
   
   <div className='d-flex justify-content-evenly  align-items-center mb-5 w-100' style={{color:"white"}}>
     
     <div style={{width:"400px",color:"white"}}>
         <h4><i class="fa-solid fa-cart-shopping fa-bounce me-3" style={{color:"orange"}}></i>E-CART</h4>
         <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit dolores, blanditiis ullam praesentium, sit enim officia sapiente mollitia culpa totam voluptatum, distinctio hic magnam provident officiis repudiandae nulla tempora nam.</h6>
     </div>

     <div className='d-flex flex-column '>
        <h4>Links</h4>
        <Link to={'/'} style={{color:"white",textDecoration:"none"}}>Home</Link>
        <Link to={'/cart'}  style={{color:"white",textDecoration:"none"}}>Cart</Link>
        <Link to={'/wishlist'}  style={{color:"white",textDecoration:"none"}}>Wish List</Link>
    </div>

     <div className='d-flex flex-column'>
  <h4>Guides</h4>
  <Link to={'https://redux.js.org/'} target='blank' style={{textDecoration:'none',color:"white"}} >Redux</Link>
  <Link to={'https://bootswatch.com/'} target='blank' style={{textDecoration:'none',color:"white"}} >Boots watch</Link>
  <Link to={'https://react-bootstrap.netlify.app/'} target='blank' style={{textDecoration:'none',color:"white"}} >React bootstrap</Link>
     </div>
    
    <div>
      <h4>Contact</h4>
      <div className='d-flex'>
        <input type="text" className='form-control' style={{borderRadius:"8px"}}  placeholder='Enter Email Id' />
        <button className='btn btn-warning ms-2'>Subscribe</button>
     </div>
     <div className='d-flex justify-content-evenly mt-3'>
        <Link style={{textDecoration:"none"}} className='text-light'><i class="fa-brands fa-instagram fs-3"></i></Link>
        <Link style={{textDecoration:"none"}} className='text-light'><i class="fa-brands fa-whatsapp fs-3"></i></Link>
        <Link style={{textDecoration:"none"}} className='text-light'><i class="fa-solid fa-envelope fs-3"></i></Link>
        <Link style={{textDecoration:"none"}} className='text-light'><i class="fa-brands fa-linkedin fs-3"></i></Link>
     </div>
    </div>
  </div>
      <p style={{color:"white"}}>Copyright &copy; E-cart built with react-redux</p>
      
    </div>




    </>
  )
}

export default Footer