import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Loginheader from '../Components/Loginheader';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [name, setName] = useState('')
  const [uemail, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedin, setIsLoggedin] = useState(false);


  
 const nav=useNavigate();
 const logout = () => {
  localStorage.removeItem("Name");
  setIsLoggedin(false);
  alert(" Logout Successfully ");
nav("/Login")
};



  const handlesubmit =async (e)=>{
    e.preventDefault()
    console.log(name,uemail,password);
    const newuser = {
        name:name,
        uemail:uemail,
        password:password
      
    };
    



    try{
      const res = await axios.post("http://localhost:5000/api/user/login",newuser)

      let s =res.data;
      if(s===0){

        localStorage.setItem(
          "Name",
          JSON.stringify(newuser)
      );
      setIsLoggedin(true);
      setName("");
      setEmail("");
      setPassword("");
    
    
    
      nav("/Home")
      }
      console.log(res.data)
      alert(" Login Successfully  Enjoy your shopping");
      nav("/Home")

      
  } catch (err) {
    console.error('Axios Error:', err);

      alert(err)
  


    }



  }
  return (
    <div>
      <Loginheader isLoggedin={isLoggedin} logout={logout}/>
      <div><h1>Login </h1>

</div>

        <div className="register">


  {!isLoggedin ? (
                    <>

  <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
        
        <Form.Control type="text" placeholder=" Enter the Username" value={name}
        onChange={(event)=>setName(event.target.value)} required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder=" Enter The Email"  value={uemail}
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
    </>
                ) : (
                    <>
                        <h1>User is logged in</h1>
                        <button onClick={logout}>
                            logout user
                        </button>
                    </>
                )}

    
   
</div>

    </div>
  )
}

export default Login



