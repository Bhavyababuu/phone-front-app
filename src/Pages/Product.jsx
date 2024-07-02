import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Userheader from '../Components/Userheader';
import './product.css';  // Import the CSS file

function Product() {
  const [data, setData] = useState([]);
  const [cartdata, setCartData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [image, setImage] = useState({});

  const Navigate = useNavigate();

  useEffect(() => {
    const fetchImage = async (product) => {
      try {
        const response = await fetch(`http://localhost:5000/uploads/${product.image}`);
        if (response.ok) {
          const blob = await response.blob();
          const objectURL = URL.createObjectURL(blob);
          setImage((prevImage) => ({
            ...prevImage,
            [product.image]: objectURL,
          }));
        } else {
          console.error('Error fetching image:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    data.forEach((product) => {
      if (product.image) {
        fetchImage(product);
      }
    });
  }, [data]);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/Viewproduct')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilter(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCartProduct = async (productId, price, productname) => {
    try {
      const newproduct = {
        user_id: 'sam',
        product_id: productId,
        price: price,
        quantity: 1,
        productname: productname,
      };

      const res = await axios.post('http://localhost:5000/api/cart/Addcart', newproduct);
      console.log(res.data);
      setCartData(cartdata);
      alert('Successfully product inserted...');
      Navigate('/Cart');
    } catch (err) {
      console.error('Axios Error:', err);
      alert(err);
    }
  };

  const filterProduct = (cat) => {
    const lowerCaseCat = cat.toLowerCase();
    const updatedList = data.filter((x) => x.category.toLowerCase() === lowerCaseCat);
    setFilter(updatedList);
  };

  return (
    <div>
      <Userheader />
      <div className="buttons d-flex justify-content-center mb-5 pb-5 " style={{ marginTop: "40px" }}>
        <button className='btn btn-outline-dark me-2 bg-dark' onClick={() => setFilter(data)}>ALL</button>
        <button className='btn btn-outline-dark me-2 bg-dark' onClick={() => filterProduct("I-Phone")}>I-Phone</button>
        <button className='btn btn-outline-dark me-2 bg-dark' onClick={() => filterProduct("Samsung")}>Samsung</button>
        <button className='btn btn-outline-dark me-2 bg-dark' onClick={() => filterProduct("Oppo")}>Oppo</button>
        <button className='btn btn-outline-dark me-2 bg-dark' onClick={() => filterProduct("Vivo")}>Vivo</button>
      </div>
      <div className="container gap-5">
        <div className="row" style={{ background: "rgb(230, 230, 217)" }}>
          {filter.map((e) => {
            return (
              <div className="col-lg-4 col-6 mt-3" key={e._id}>
                <Card style={{ width: '18rem' }} className="h">
                  <img src={`http://localhost:5000/uploads/${e.image}`} alt="Product representation" style={{ height: '18rem' }} className='p-2' />
          
                      <h5 className="card-title ">{e.productname}</h5>
                    
                    <div> <h4>₹{e.price}</h4></div>
                    
                    <Button className="delete-button" onClick={() => handleCartProduct(e._id, e.price, e.productname)}>Add to cart</Button>
                  
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card bg-dark text-white">
        <div className="card-body">&copy; 2023 Sports Application</div>
      </div>
    </div>
  );
}

export default Product;
