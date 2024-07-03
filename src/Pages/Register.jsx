import React, { useState } from 'react'
import axios from 'axios'


import'./Register.css'
import { Button, Form} from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'
import Loginheader from '../Components/Loginheader'

function Register() {
  const nav =useNavigate()
  // const go=useNavigate()
  // const Login=()=>{
  //     go('/Login')

  // }

    const [name, setName] = useState('')
    const [uemail, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    //form function

   const handlesubmit =async (e)=>{
    e.preventDefault()
    console.log(name,uemail,password,phone,address);
    const newuser = {
        name:name,
        uemail:uemail,
        password:password,
        phone: phone,
        address:address,
    };
    try{
      const res = await axios.post("api/user/userreg",newuser)
      console.log(res.data)
      alert(" Registration Successfull.. Please Login");
     
  nav('/Login')
  } catch (err) {
    console.error('Axios Error:', err);

      alert(err)
}

} 

return (
    <div>

<Loginheader/>
<div>
  <h1>REGISTER</h1>

  </div>

<div className="register">
  <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
        
        <Form.Control type="text" placeholder=" Enter the Username"  value={name} 
        onChange={(event)=>setName(event.target.value)} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicuemail">
        
        <Form.Control type="text" placeholder=" Enter The Email" value={uemail} 
        onChange={(event)=>setEmail(event.target.value)} required/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder=" Enter The Password"  value={password}
        onChange={(event)=>setPassword(event.target.value)} required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicphone">
        
        <Form.Control type="text" placeholder=" Enter Phone Number" value={phone}
        onChange={(event)=>setPhone(event.target.value)} required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder=" Enter The  Adress" value={address}
        onChange={(event)=>setAddress(event.target.value)} required />
        
      </Form.Group>
      {/* <Button variant="primary" type="submit" onClick={Login} >
        Submit
      </Button> */}
      <Button variant="primary" type="submit"  >
        Submit
      </Button>
   
</Form>
</div>
</div>
  )
}

export default Register