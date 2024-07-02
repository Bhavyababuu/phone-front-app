import React, { useState,useContext,useEffect } from 'react'
import axios from 'axios'
import MyContext from '../MyContext';
import Adminheader from '../../Components/Adminheader';


// import Viewproduct from './Viewproduct';

import {   useNavigate } from 'react-router-dom';



export default function Edit() {
  

    const {editData} = useContext(MyContext)

    const [productname, setProduct] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const Navi = useNavigate()
    useEffect(() => {
        // Set initial form input values based on editData
        if (editData) {
            setProduct(editData.productname);
            setCategory(editData.category);
            setPrice(editData.price);
            setDescription(editData.description);
        }
      }, [editData]);


    const onSubmit = async (e) => {
        e.preventDefault()
          
        const edit = {
            id:editData._id,
            productname:productname,
      category:category,
      price:price,
      description:description
        };

        try {
            // const res = await axios.post('http://localhost:5000/api/admin/updateCompany', edit)
            // console.log(res.editData);
             axios.post('http://localhost:5000/api/admin/updateproduct', edit)
            .then((response) => {
            
console.log("id is:"+edit.id);
              alert('Successfully updated...');
              console.log(response.data);  
            })
            .catch((error) => {
               
              alert('Error occurred: ' + error.message);
              console.error(error);  
            });

            Navi("/Viewproduct");

        } catch (e) {
            alert(e)
        }
    }
    return (
      <div className="container mt-2">
         <Adminheader/>
         <h2>Edit Company</h2>
     
     <form onSubmit={onSubmit}>
         <div className="mb-2 mt-3"> Productname
             <input
                 type="text"
                 placeholder={editData.productname}
                 className="form-control"
                 onChange={(event) => {
                     setProduct(event.target.value)
                     
                 }}
                 value={productname}
             />
         </div>
         <div className="mb-2 mt-3">
             Category
             <input
                 type="text"
                 placeholder={editData.category}
                 className="form-control"
                 onChange={(event) => {
                     setCategory(event.target.value)
                 }}
                 value={category}
             />
         </div>
         <div className="mb-2 mt-3">
             Price
             <input
                 type="text"
                 placeholder={editData.price}
                 className="form-control"
                 

                 onChange={(event) => {
                     setPrice(event.target.value)
                 }}
                 value={price} 
             />
         </div>
         <div className="mb-2 mt-3">
             <input
                 type="text"
                 placeholder={editData.description}
                 className="form-control"
                 onChange={(event) => {
                     setDescription(event.target.value)
                 }}
                 value={description}
             />
         </div>
         <button type="submit" className="btn btn-success">
             Update
         </button>
     </form>


      </div>
    )
}
