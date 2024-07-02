import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';


function Viewcart() {
    const [data, setData] = useState([]);
    // const {editData, setEditData }=  useContext(MyContext)
    const [cartTotal, setCartTotal] = useState(0);
    
  
    useEffect(() => {
      
      fetch('http://localhost:5000/api/cart/Viewcart')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const newCartTotal = data.reduce((total, item) => total + item.price * item.quantity, 0);
        setCartTotal(newCartTotal);
      }).catch((error) => console.error(error));
  
    }, [data]);
  
    const  handleDeleteClick = async (productId) => {
        try {
          const response = await fetch(`http://localhost:5000/api/cart/removecart/${productId}`, {
            method: 'GET', 
          });
    
          if (response.ok) {
            alert('Product deleted successfully');
            console.log('Product  deleted successfully');
          } else {
           
            console.error('Failed to delete Product');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
      

      const incQty =(product_id) =>{
        axios.post('http://localhost:5000/api/cart/Addcart', { product_id })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error incrementing quantity:', error);
        });
    };     
    const deQty =(product_id) =>{
      axios.post('http://localhost:5000/api/cart/deletecart', { product_id })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error incrementing quantity:', error);
      });
  };     

     

  return (
    <div>
       <br /> <br />
      <h2 className="heading" style={{ color: 'blue' }}> View Cart</h2>
      <br />
      <div class="card bg-success text-white">
        <div class="card-body">Total Cart Amount : {cartTotal}</div>
      </div>
      < div className="container gap-5">
        <div className=" row " style={{ background: " rgb(230, 230, 217)" }}>
          {data.map((e) => {
            return (
              <div
                className="col-lg-4 col-6 mt-3"
              >
                <Card style={{ maxwidth: "48rem" }} className="hovereffect" >
                  
                  <Card.Body>
                  <Card.Title >Product : {e.productname}</Card.Title>
                  
                    {/* <Card.Title >Product id: {e.product_id}</Card.Title> */}
                    <Card.Text>Price : ₹{e.price}</Card.Text>
                    <Card.Text>Quantity:
                    <div>
          <p>
               <button onClick={()=>incQty(e.product_id)} className='m-1'>+</button>{e.quantity}
              <button onClick={()=>deQty(e.product_id)} className='m-1'>-</button>
          </p>
          </div>
      

                    </Card.Text>
                    <Card.Text>Total: {e.total}</Card.Text>

                    <Button class="btn btn-danger" onClick={() => handleDeleteClick(e._id)}>Delete</Button>

                  </Card.Body>
                </Card>{" "}

              </div>
            );
          })}
        </div>

      </div>
      <br />
      <div class="card bg-dark text-white">
        <div class="card-body">&copy; 2023 Sports Application</div>
      </div>
         </div>
  )
}

export default Viewcart