import React from 'react';
import Userheader from '../Components/Userheader';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Button, Card, Row, Col } from 'react-bootstrap';

function Home() {
  const nav = useNavigate();
  let name = localStorage.getItem('Name');
  let p = localStorage.getItem('Password');

  const handleShopNow = () => {
    nav("/Product");
  };

  const logout = () => {
    localStorage.removeItem('Name');
    alert("Logout Successfully");
    nav("/Login");
    window.location.reload();
  };

  if (name) {
    console.log("local: " + name, p);
  } else {
    console.log("no user");
  }

  return (
    <div>
      <Userheader isLoggedin={!!name} logout={logout} />
      <div className="card bg-dark text-white border-0">
        <img src="assets/p9.avif" className="card-img" alt="Background" height="340px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder text-light mb-0">NEW <br />SEASON<br /> ARRIVALS</h5>
          </div>
        </div>
      </div><h1> Shop Now !!</h1>
      <div className="container my-5">
        <Row className="g-4">
          <Col md={3}>
            <Card className="product-card">
              <Card.Img variant="top" src="/assets/iphone.jpeg" />
              <Card.Body>
                <Card.Title>I-phone 15 pro</Card.Title>
                <Button variant="primary" onClick={handleShopNow}>Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="product-card">
              <Card.Img variant="top" src="/assets/f25.jpeg" />
              <Card.Body>
                <Card.Title>Samsung Galaxy S21</Card.Title>
                <Button variant="primary" onClick={handleShopNow}>Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="product-card">
              <Card.Img variant="top" src="/assets/vy.jpeg" />
              <Card.Body>
                <Card.Title>Vivo X60</Card.Title>
                <Button variant="primary" onClick={handleShopNow}>Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="product-card">
              <Card.Img variant="top" src="/assets/oppo18.jpeg" />
              <Card.Body>
                <Card.Title>Oppo Find X3</Card.Title>
                <Button variant="primary" onClick={handleShopNow}>Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="card bg-dark text-white footer-card">
        <div className="card-body">&copy; 2023 Sports Application</div>
      </div>
    </div>
  );
}

export default Home;
