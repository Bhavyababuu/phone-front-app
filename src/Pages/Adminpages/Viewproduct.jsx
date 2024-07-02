import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './View.css';
import Adminheader from '../../Components/Adminheader';
import MyContext from '../MyContext';
import { useNavigate } from 'react-router-dom';

function Viewproduct() {
  const [data, setData] = useState([]);
  const { editData, setEditData } = useContext(MyContext);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/Viewproduct')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDeleteClick = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/deleteproduct/${productId}`, {
        method: 'GET',
      });

      if (response.ok) {
        alert('Product deleted successfully');
        console.log('Product deleted successfully');
        setData(data.filter(item => item._id !== productId)); // Update the state to remove the deleted product
      } else {
        console.error('Failed to delete Product');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleEditClick = async (productId) => {
    try {
      console.log('edit id :' + productId);
      const response = await fetch(`http://localhost:5000/api/admin/viewsingleproduct/${productId}`);
      const data = await response.json();
      setEditData(data);

      if (data) {
        console.log('productname :' + data.productname);
        console.log('category :' + data.category);
        console.log('id :' + data._id);
        console.log('price :' + data.price);
        console.log('description:' + data.description);
      }

      Navigate("/Edit");
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <Adminheader />
      <div>
        <h1>Product Display</h1>
        <Table id="customers" className="my-custom-table" border={1}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.productname}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  {item.image && (
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.productname}
                      style={{ width: '50px', height: '50px' }}
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => handleEditClick(item._id)} className="btn btn-info">Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteClick(item._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Viewproduct;
