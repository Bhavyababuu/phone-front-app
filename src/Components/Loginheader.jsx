import React from 'react'
import { Container, Nav,  Navbar } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'
import { FcSmartphoneTablet } from "react-icons/fc";
import { RiUserSharedLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";

// import { useAuth } from '../Context/Auth';

// import Adminlogin from '../Pages/Adminpages/Adminlogin'
import'./loghead.css';
function Loginheader() {
  

    const go=useNavigate()
    
    
    const Register=()=>{
        go('/Register')

    }
    const Adminregistration=()=>{
      go('/Adminregistration')

  }
    
    



  return (
    

    <div className='head'>
        <Navbar data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home" className='text'><FcSmartphoneTablet size={'60px'} />
          <l>PHONE HUB</l></Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link onClick={Register}> <RiUserSharedLine size={'26px'}/>
          <b><u>USER LOGIN</u></b></Nav.Link>
          <Nav.Link onClick={Adminregistration}><RiAdminFill size={'26px'}/>
          <b><u>ADMIN LOGIN</u></b></Nav.Link>

              </Nav>
        </Container>
      </Navbar>

    </div>
    

  )
}

export default Loginheader