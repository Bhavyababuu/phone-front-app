import React from 'react';
import Loginheader from '../Components/Loginheader';
import './loginhome.css';

function Loginhome() {
  

 
  
  
  return (
    <div>
      <Loginheader />
      <div className="card bg-dark border-0">
        <img src="/assets/p9.avif" class="card-img" alt="Background" height="560px" />
        <div className="card-img-overlay d-flex ">
        <div className="login-container">
        <h2><b>WELCOME ! </b><bR></bR><br></br>Enjoy Your Shopping <br></br>30% off at your first order</h2>
        {/* <h2>Login To Your Account</h2> */}
      </div>

                 </div>
      </div>

     
      <div class="card bg-dark text-white">
        <div class="card-body">&copy; 2023 Sports Application</div>
      </div>
    </div>
  );
}

export default Loginhome;
