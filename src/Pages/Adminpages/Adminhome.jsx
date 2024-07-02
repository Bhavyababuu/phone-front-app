import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Adminheader from '../../Components/Adminheader';
import './Ahome.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function Adminhome() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const handleAddProduct = () => {
    navigate('/Addproduct');
  };

  const handleViewProduct = () => {
    navigate('/Viewproduct');
  };

  return (
    <div>
      <Adminheader />
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Welcome to the Admin Dashboard</h2>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Sales Chart</h3>
            <canvas ref={chartRef} id="salesChart"></canvas>
          </div>
          <div className="col-md-6">
            <h3>Admin Actions</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <button onClick={handleAddProduct} className="btn btn-primary">Add New Product</button>
              </li>
              <li className="list-group-item">
                <button onClick={handleViewProduct} className="btn btn-primary">View Products</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card bg-dark text-white">
        <div className="card-body">&copy; 2023 Sports Application</div>
      </div>
    </div>
  );
}

export default Adminhome;
