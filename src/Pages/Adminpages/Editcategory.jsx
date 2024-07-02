import React, { useContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyContext from '../MyContext';
import Adminheader from '../../Components/Adminheader';


function Editcategory() {

    const {editData} = useContext(MyContext)

    const [categoryname, setCategory] = useState('')
    
    const Navi = useNavigate()
    useEffect(() => {
        // Set initial form input values based on editData
        if (editData) {
            setCategory(editData.categoryname);
            
        }
      }, [editData]);


    const onSubmit = async (e) => {
        e.preventDefault()
          
        const edit = {
            id:editData._id,
            categoryname:categoryname,
      
        };

        try {
            // const res = await axios.post('http://localhost:5000/api/admin/updateCompany', edit)
            // console.log(res.editData);
             axios.post('http://localhost:5000/api/category/updatecategory', edit)
            .then((response) => {
            
console.log("id is:"+edit.id);
              alert('Successfully updated...');
              console.log(response.data);  
            })
            .catch((error) => {
               
              alert('Error occurred: ' + error.message);
              console.error(error);  
            });

            Navi("/Categories");

        } catch (e) {
            alert(e)
        }
    }
  return (
    <div>
        <Adminheader/>
        <h2>Edit Company</h2>
     
     <form onSubmit={onSubmit}>
         <div className="mb-2 mt-3"> category name
             <input
                 type="text"
                 placeholder={editData.categoryname}
                 className="form-control"
                 onChange={(event) => {
                     setCategory(event.target.value)
                     
                 }}
                 value={categoryname}
             />
         </div>
                  <button type="submit" className="btn btn-success">
             Update
         </button>
     </form>


    </div>
  )
}

export default Editcategory