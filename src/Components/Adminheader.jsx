import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FcSmartphoneTablet } from "react-icons/fc";

import './loghead.css';
function Adminheader() {
    const go=useNavigate()
    const Adminhome=()=>{
        go('/Adminhome')


    } 
   
    const Adminlogin=()=>{
        go('/Adminlogin')


    } 
    const Addproduct=()=>{
      go('/Addproduct')

  } 
  const Addcategory=()=>{
    go('/Addcategory')
  }
    const Viewcategories=()=>{
      go('/Viewcategories')
  
  }
  

const Viewproduct=()=>{
  go('/Viewproduct')

} 
const Viewuser=()=>{
go('/Viewuser')

} 

  
  return (
    <div>
        <Navbar  data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home"><FcSmartphoneTablet size={'60px'} />PHONE CART</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={Adminhome}>Adminhome</Nav.Link>
            <Nav.Link onClick={Adminlogin}>Logout</Nav.Link>
            <Nav.Link onClick={Addproduct}>Addproduct</Nav.Link>

             <Nav.Link onClick={Addcategory}>Addcategory</Nav.Link>
            <Nav.Link  onClick={Viewcategories}>Viewcategories</Nav.Link>
            <Nav.Link onClick={Viewproduct}>Viewproduct</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    </div>
  )
}

export default Adminheader