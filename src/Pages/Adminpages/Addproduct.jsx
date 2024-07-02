import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Adminheader from '../../Components/Adminheader';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    setImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productname', productName);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', parseFloat(price));
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/api/admin/Addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      alert('Product successfully inserted...');
    } catch (err) {
      console.error('Axios Error:', err);
      alert(err.message || 'An error occurred while adding the product.');
    }
  };

  const downloadFile = async () => {
    try {
      const name = "mr1.jpg";
      const post = {
        name: name,
      };
      const response = await axios.post('http://localhost:5000/api/admin/download', post, {
        responseType: 'blob',
      });

      if (response.status === 200) {
        console.log('File download started');
        const blob = response.data;
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('File download failed.');
      }
    } catch (error) {
      console.error('An error occurred during file download:', error);
    }
  };

  return (
    <div>
      <Adminheader />
      <h1>Add Products</h1>
      <div className="register">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Control
              type="text"
              placeholder="Enter the Productname"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicategory">
            <Form.Control
              list="categorySuggestions"
              type="text"
              placeholder="Enter The category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              required
            />
            <datalist id="categorySuggestions">
              <option value="iPhone" />
              <option value="Samsung" />
              <option value="Vivo" />
              <option value="Oppo" />
            </datalist>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPrice">
            <Form.Control
              type="text"
              placeholder="Enter The Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicdecription">
            <Form.Control
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicImage">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" onChange={handleImageChange} encType="multipart/form-data" required />
          </Form.Group>
          {image && (
            <div>
              <h2>Preview Image</h2>
              <img src={URL.createObjectURL(image)} alt="product" style={{ width: '200px' }} />
            </div>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <button type="button" className="btn btn-info" onClick={downloadFile}>
          Download
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
