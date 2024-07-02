import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import "./View.css"
import Adminheader from '../../Components/Adminheader';

function Viewuser() {


  const [data, setData] = useState([]);
  // const {editData, setEditData} =  useContext(MyContext);
  // const Navi = useNavigate()

  useEffect(() => {
    
    fetch('http://localhost:5000/api/user/Viewuser')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [data]);





  return (
    <div>
      <Adminheader/>
      <div>
      <h1>All user</h1>
      <Table id="customers" className="my-custom-table"  border={1}>
  <tr>
    <th>User Name</th>
    <th>Email</th>
    <th>Password</th>
    <th>phone</th>
    <th>Address </th>
    <th> </th>
    <th> </th>
  </tr>
  {data.map((item) => (
  <tr>
    <td>{item.name}</td>
    <td>{item.uemail}</td>
    <td>{item.password}</td>
    <td>{item.phone}</td>
    <td>{item.address}</td>
    {/* <td>  <button onClick={() => handleEditClick(item._id)} className="btn btn-info">Edit</button> */}
    {/* </td> */}

    {/* <td>  <button onClick={() => handleDeleteClick(item._id)} className="btn btn-danger">Delete</button> */}
    {/* </td> */}
  </tr>
    ))}
  </Table>
    </div>
  

    </div>
  )
}

export default Viewuser