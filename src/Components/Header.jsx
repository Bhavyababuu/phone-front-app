import React from 'react'
import'./Header.css';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


// import { IconName } from "react-icons/fa";



function Header() {
    const go=useNavigate()
        const Home=()=>{
            go('/')

        }
        const Login=()=>{
            go('/Login')

        }
        const Register=()=>{
            go('/Register')

        }
        const Categories=()=>{
          go('/Categories')

      }
      const Product=()=>{
        go('/Product')

    }
        
        const Cart=()=>{
            go('/Cart')

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
<Navbar bg="light" data-bs-theme="dark" className='navbar'>
        <Container>
          <Navbar.Brand href="#home">SPORTZ CART</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={Home}>Home</Nav.Link>
            <Nav.Link onClick={Categories}>Categories</Nav.Link>
            <Nav.Link onClick={Product}>Product</Nav.Link>

             <Nav.Link onClick={Register}>REGISTER</Nav.Link>
            <Nav.Link onClick={Login}>LOGIN</Nav.Link>
            <Nav.Link onClick={Cart}>CART</Nav.Link>
            

            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={Adminlogin}>Adminlogin</NavDropdown.Item>
              <NavDropdown.Item onClick={Addproduct}>Addproduct</NavDropdown.Item>
              <NavDropdown.Item onClick={Addcategory}>Addcategory</NavDropdown.Item>
              <NavDropdown.Item onClick={Viewcategories}>Viewcategories</NavDropdown.Item>

              <NavDropdown.Item onClick={Viewproduct}>Viewproduct</NavDropdown.Item>
              <NavDropdown.Item onClick={Viewuser}>Viewuser</NavDropdown.Item>


              
            </NavDropdown>
          
  
            
            
            
            </Nav>
        </Container>
      </Navbar>
      
      
 






    </div>
  )
}

export default Header