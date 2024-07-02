import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaCartShopping } from "react-icons/fa6";

import './loghead.css'
function Userheader({ isLoggedin,logout}) {
    const go=useNavigate()
   
    
 

   
    const Home=()=>{
        go('/Home')

    }
    const Login=()=>{
        go('/Login')

    }
    const Contact=()=>{
        go('/contact')

    }
  //   const Categories=()=>{
  //     go('/Categories')

  // }
  const Product=()=>{
    go('/Product')

}
    
    const Cart=()=>{
        go('/Cart')

    }

  return (
    <div>
        <Navbar  data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home"><FcSmartphoneTablet size={'60px'}/><i>PHONE CART</i></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={Home}>HOME</Nav.Link>
            {/* <Nav.Link onClick={Categories}>Categories</Nav.Link> */}
            <Nav.Link onClick={Product}>PRODUCT</Nav.Link>
            {isLoggedin ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <>
             
             {/* <Nav.Link onClick={Register}>REGISTER</Nav.Link> */}
            <Nav.Link onClick={Login}>LOGOUT</Nav.Link>
            </>
            )}
            <Nav.Link onClick={Contact}>CONTACT</Nav.Link>

            <Nav.Link onClick={Cart}>CART<FaCartShopping  size={'20px'}/>
            </Nav.Link>
            

           
      

            
            
            </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Userheader