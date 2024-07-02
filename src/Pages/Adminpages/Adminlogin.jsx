import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Loginheader from '../../Components/Loginheader'
import { useNavigate } from 'react-router-dom'

function Adminlogin() {

    const [adminname, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
      
  const nav =useNavigate()
  


  const handlesubmit =async (e)=>{
    e.preventDefault()
    console.log(adminname,email,password);
    const admin = {
        adminname:adminname,
        email:email,
        password:password
      
    };
    try{
      const res = await axios.post("http://localhost:5000/api/admin/adminlogin",admin)
      let s =res.data;
      if(s===0){
        nav("/Adminhome")
      }else{
        alert("error")
      }
      console.log(res.data)
      alert("Admin Login Successfully ");
     

  } catch (err) {
    console.error('Axios Error:', err);

      alert(err)
  


    }

  }
  return (
    <div>
      <Loginheader/>
      <div>  <h1>Login</h1>
      </div>
 <div className="register">
  <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
        
        <Form.Control type="text" placeholder=" Enter the Username" value={adminname}
        onChange={(event)=>setName(event.target.value)} required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder=" Enter The Email"  value={email}
        onChange={(event)=>setEmail(event.target.value)} required/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder=" Enter The Password"  value={password}
        onChange={(event)=>setPassword(event.target.value)} required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



</div>




    </div>
  )
}

export default Adminlogin