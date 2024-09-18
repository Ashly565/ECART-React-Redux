import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const cartArray=useSelector((state)=>state.cartReducer);
  const dispatch=useDispatch()
  // console.log("==cartArray==");
  // console.log(cartArray);
  // hook used to navigate to a particular path or page
  const navigate=useNavigate()
  const [total,setTotal]=useState(0)
 const getTotal=()=>{
  let sum=0;
  cartArray.forEach((item)=>{
    sum=sum+item.price;
  })
  setTotal(sum)
 }
 useEffect(()=>{
  getTotal();
 },[cartArray])

   const  handleCart=()=>{
       alert("Thank you..your order placed sucsessfully...")
       dispatch(emptyCart())
       navigate('/')
   }
  return (
    <>
    <div style={{marginTop:'60px'}}>

      {
        cartArray?.length>0?
      <div className='row w-100'>
          <div className='col-lg-6 m-5'>
            <table className='table shadow border'>
              <thead >
                <tr className='text-warning'>
                  <th></th>
                  <th>Product Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArray?.map((item,index)=>(
                    <tr>
                  <td>{index+1}</td>
                  <td>{item.title.slice(0.20)}...</td>
                  <td><img src={item.image} alt="" height="75px" width="75px"/></td>
                  <td>&#x20B9;{item.price}</td>
                  <td><Button variant="outline-danger" onClick={()=>dispatch(removeFromCart(item.id))}>
                    <i class="fa-solid fa-trash"></i></Button></td>
                </tr>
                  ))
                }
                
              </tbody>
            </table>
           </div> 
           <div className='col-lg-4 mt-5'>
            <div className='border shadow p-5'>
              <h3 className='text-primary mb-3 fw-bold'>Cart Summary</h3>
              <h5>Total Number of Products: <span className='text-warning fw-bolder'>{cartArray?.length}</span></h5>
              <h5>Total Price: <span  className='text-warning fw-bolder'>&#x20B9;{total}</span></h5>
              <button className='btn btn-success rounded w-100 mt-3' onClick={handleCart}>CHECKOUT</button>
            </div>
           </div>
           </div>:
           
              <div style={{height:"100vh"}} className='d-flex align-items-center flex-column'>
                <img height="200px" style={{marginLeft:"10px",marginTop:"40px"}}
                 src="https://imgs.search.brave.com/we7b8gsXeaS7wf3TZk6R9wJlJuln1uCyYhj5HwBCiHY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80NS00/NTY4OTJfY2FydC1p/Y29uLXBuZy10cmFu/c3BhcmVudC15b3Vy/LWNhcnQtaXMtZW1w/dHkucG5n" alt="" />
                <h2 className='text-danger fw-bolder mt-3'>Your cart is empty</h2>
             </div>


     
}

    </div>
    </>
  )
}

export default Cart