import React, { useEffect, useState } from 'react';
import Userheader from '../Components/Userheader';
import { useLocation } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import './Payment.css';

const Payment = () => {
  const location = useLocation(); // use useLocation hook
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (location && location.state && location.state.totalAmount) {
      setAmount(location.state.totalAmount.toString());
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: 'rzp_test_fY6WRHljOMF0RL',
        key_secret: "e0ukFu3IB2frdeI2FPKQ5urI",
        amount: amount * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Bhavya mb",
          email: "bhavyamb28@gmail.com",
          contact: "8078974737"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  let totalAmount = 0;
  if (location && location.state && location.state.totalAmount) {
    totalAmount = location.state.totalAmount;
  }

  return (
    <div className="App">
      <Userheader />
      <Container className="payment-container mt-5">
        <h2 className="text-center">Razorpay Payment</h2>
        <p className="text-center">Total Amount: {totalAmount}</p>
        <Form onSubmit={handleSubmit} className="payment-form">
          <Form.Group controlId="formAmount">
            <Form.Control
              type="text"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Place Your Order
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Payment;
