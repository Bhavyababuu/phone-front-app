import React, { useContext, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
// import './Category.css'
import { useNavigate } from 'react-router-dom';
import MyContext from '../MyContext';
import Adminheader from '../../Components/Adminheader';


function Viewcategories() {
  const [data, setData] = useState([]);
  const {editData, setEditData }=  useContext(MyContext)
  const Navigate = useNavigate()
  useEffect(() => {
    
    fetch('http://localhost:5000/api/category/Viewcategory')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [data]);


  const  handleDeleteClick = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/category/deletecategory/${categoryId}`, {
        method: 'GET', 
      });

      if (response.ok) {
        alert('Product deleted successfully');
        console.log('catagory  deleted successfully');
      } else {
       
        console.error('Failed to delete catagory');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  


  const  handleEditClick = async (categoryId) => {
    try {
        console.log('edit id :'+categoryId);
         fetch(`http://localhost:5000/api/category/viewsinglecategory/${categoryId}`)
      .then((response) => response.json())
      .then((data) => setEditData (data))
      .catch((error) => console.error(error));
     

      if (editData === null || editData === undefined) {
        return <div>Loading...</div>;
      }
      else{
        console.log('productname :'+editData.categoryname || "");
       
      }
      
      Navigate("/Editcategory");

      
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


 
  return (
    <div>
      <Adminheader/>
     <div>
      <h1>Category Display</h1>
      <Table id="customers" className="my-custom-table"  border={1}>
  <tr>
    <th>Category Name</th>
  
    <th> </th>
    <th> </th>
  </tr>
  {data.map((item) => (
  <tr>
    <td>{item.categoryname}</td>
  
    <td>  <button onClick={() => handleEditClick(item._id)} className="btn btn-info">Edit</button>
    </td>

    <td>  <button onClick={() => handleDeleteClick(item._id)} className="btn btn-danger">Delete</button>
    </td>
  </tr>
    ))}
  </Table>
    </div>
   
    </div>
  )
}

export default Viewcategories