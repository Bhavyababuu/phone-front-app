import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Userheader from '../Components/Userheader';
import { useNavigate } from 'react-router-dom';
import './cart.css';  // Import the CSS file

function Cart() {
  const [data, setData] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const nav = useNavigate();

  const Payment = () => {
    nav('/Payment', { state: { totalAmount: cartTotal } });
  };

  const logout = () => {
    localStorage.removeItem("Name");
    setIsLoggedin(false);
    alert("Logout Successfully");
    nav("/Login");
  };

  useEffect(() => {
    fetch('http://localhost:5000/api/cart/Viewcart')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const newCartTotal = data.reduce((total, item) => total + item.price * item.quantity, 0);
        setCartTotal(newCartTotal);
      })
      .catch((error) => console.error(error));
  }, [data]);

  const handleDeleteClick = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/removecart/${productId}`, {
        method: 'GET',
      });

      if (response.ok) {
        alert('Product deleted successfully');
        console.log('Product deleted successfully');
      } else {
        console.error('Failed to delete Product');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const incQty = (product_id) => {
    axios.post('http://localhost:5000/api/cart/Addcart', { product_id })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error incrementing quantity:', error);
      });
  };

  const deQty = (product_id) => {
    axios.post('http://localhost:5000/api/cart/deletecart', { product_id })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error decrementing quantity:', error);
      });
  };

  return (
    <div>
      <Userheader isLoggedin={isLoggedin} logout={logout} />
      <Container className='h'>
      <h3 className="order-now">Order Now</h3>

        <Row>
          <Col lg={6}>
            <Row className="">
              {data.map((e) => (
                <Col md={12} key={e._id} >
                  <Card className="ht">
                  <p>Price Of Product: ₹{e.price}</p>
                         Select Quantity:
                        <div className="quantity-section">
                          <Button onClick={() => incQty(e.product_id)} className='btn btn-outline-secondary m-1'>+</Button>
                          <span className="quantity">{e.quantity}</span>
                          <Button onClick={() => deQty(e.product_id)} className='btn btn-outline-secondary m-1'>-</Button>
                        </div>

                    <Card.Body>
                      <Card.Text>Total: ₹{e.price * e.quantity}</Card.Text>
                      <Button className="btn btn-danger" onClick={() => handleDeleteClick(e._id)}>Delete</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6}>
            <div className="card">
              <div className="total">Total Cart Amount: ₹{cartTotal}</div>
              <Button onClick={Payment} className='btn btn-success'>Buy Now</Button>

            </div>
          </Col>
        </Row>
      </Container>
      <div className="card bg-dark text-white mt-4">
        <div className="card-body text-center">&copy; 2023 Sports Application</div>
      </div>
    </div>
  );
}

export default Cart;
