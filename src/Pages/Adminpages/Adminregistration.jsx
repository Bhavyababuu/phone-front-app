import React, { useState } from 'react'
import axios from 'axios'


// import'./Register.css'
import { Button, Form} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import Loginheader from '../../Components/Loginheader'


function Adminregistration() {

  const nav =useNavigate()
  // const Adminlogin=()=>{
  //     go('/Adminlogin')

  // }

    const [adminname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    //form function

   const handlesubmit =async (e)=>{
    e.preventDefault()
    console.log(adminname,email,password);
    const newuser = {
        adminname:adminname,
        email:email,
        password:password,
        
    };
    try{
      const res = await axios.post("http://localhost:5000/api/admin/registrationadmin",newuser)
      console.log(res.data)
      alert("Successfully inserted...");
     
        nav('/Adminlogin')
  } catch (err) {
    console.error('Axios Error:', err);

      alert(err)
  


    }


  } 
   

  return (
    <div>

<Loginheader/>
<div>
  <h1>Register </h1>

  </div>

<div className="register">
  <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
        
        <Form.Control type="text" placeholder=" Enter the Adminname"  value={adminname} 
        onChange={(event)=>setName(event.target.value)} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicuemail">
        
        <Form.Control type="text" placeholder=" Enter The Email" value={email} 
        onChange={(event)=>setEmail(event.target.value)} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder=" Enter The Password"  value={password}
        onChange={(event)=>setPassword(event.target.value)} required/>
      </Form.Group>
      
      
      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>



</div>








    </div>
  )
}

export default Adminregistration