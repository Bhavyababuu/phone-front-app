import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Adminheader from '../../Components/Adminheader';
function Addcategory() {
  const [categoryname, setCategoryame] = useState('')
  
  const handlesubmit =async (e)=>{
    e.preventDefault()
    console.log(categoryname);
    const newcategory = {
        categoryname:categoryname,
        
      
    };
    try{
      const res = await axios.post("http://localhost:5000/api/category/Addcategory",newcategory)
      console.log(res.data)
      alert(" Category created  Successfully ");
     

  } catch (err) {
    console.error('Axios Error:', err);

      alert(err)
  


    }

  }
  
  return (
    <div>
      <Adminheader/>
       <div className="register">
  <h1>Category Page</h1>
  <Form onSubmit={handlesubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
        
        <Form.Control type="text" placeholder=" Enter the Username" value={categoryname}
        onChange={(event)=>setCategoryame(event.target.value)} required />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



</div>

    </div>
  )
}

export default Addcategory