
import './App.css';

import MyContext from './Pages/MyContext';
 import { BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import Adminlogin from './Pages/Adminpages/Adminlogin';
import Adminregistration from './Pages/Adminpages/Adminregistration';
import Addproduct from './Pages/Adminpages/Addproduct';
import Addcategory from './Pages/Adminpages/Addcategory';
import Viewproduct from './Pages/Adminpages/Viewproduct';
import Viewuser from './Pages/Adminpages/Viewuser';
import Viewcategories from './Pages/Adminpages/Viewcategories';
import Edit from './Pages/Adminpages/Edit';
import { useState } from 'react';
import Product from './Pages/Product';
import Editcategory from './Pages/Adminpages/Editcategory';
import Adminhome from './Pages/Adminpages/Adminhome';
import Loginhome from './Pages/Loginhome';
import Payment from './Pages/Payment';
import Contact from './Pages/Contact';





function App() {

  const [editData, setEditData] = useState([]);

return (
    <div className="App">
      
       <MyContext.Provider value={{editData, setEditData }}>
      
       <BrowserRouter>
       

      <Routes>
      <Route path='/Payment' element={<Payment/>}/>

      <Route path='/Home' element={<Home/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/Adminhome' element={<Adminhome/>}/>
      <Route path='/' element={<Loginhome/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>

      <Route path='/Adminlogin' element={<Adminlogin/>}/>
      <Route path='/Adminregistration' element={<Adminregistration/>}/>
      <Route path='/Addproduct' element={<Addproduct/>}/>
      <Route path='/Addcategory' element={<Addcategory/>}/>
      <Route path='/Viewcategories' element={<Viewcategories/>}/>
       <Route path='/Viewproduct' element={<Viewproduct/>}/>
      <Route path='/Edit' element={<Edit/>}/>
      <Route path='/Editcategory' element={<Editcategory/>}/>
       <Route path='/Viewuser' element={<Viewuser/>}/>
      </Routes> 
      

     </BrowserRouter> 
     </MyContext.Provider>
   </div>
  );
}

export default App;
