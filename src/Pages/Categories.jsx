import React, { useEffect, useState } from 'react'
import {  Card} from 'react-bootstrap';
import './Category.css'
import { useNavigate } from 'react-router-dom';
import Userheader from '../Components/Userheader';


function Categories() {
  const [data, setData] = useState([]);
  
  const Navi = useNavigate()

  
  useEffect(() => {
    
    fetch('http://localhost:5000/api/category/Viewcategory')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [data]);

  const  handleProduct = async (categoryId) =>{
    
    Navi("/product");
  }
  return (
    <div className='container gap-5'>
     <div className=" row " style={{ background: " rgb(230, 230, 217)" }}>
      <h1>Category Display</h1>
      
  
  
    {data.map((e) => {
      return (
        <div
          className="col-lg-4 col-6 mt-3"
        >
                <Userheader/>

          <Card style={{ maxwidth: "48rem" }} className="hovereffect" >
            {/* <Card.Img variant="top" src={e.productname} /> */}
            <Card.Body>
              <Card.Title >{e.categoryname}</Card.Title>
              
                
           {/* <Button variant="primary" type="submit" >Go </Button> */}

              <button className="delete-button" onClick={() => handleProduct(e.id)}>GO</button> 
              {/* <button className="edit-button" onClick={() => handleEditProduct(e.id)}>Edit</button> */}
            </Card.Body>
          </Card>{" "}

        </div>
      );
    })}

    
  
    </div>
   
    </div>
  )
}

export default Categories