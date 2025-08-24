import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Table() {
  const [maintenanceRecords, setMaintenanceRecords] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    Axios.get("http://localhost:1337/api/managepkg")
      .then((response) => {
        setMaintenanceRecords(response.data);
      })
      .catch((error) => {
        console.error("Error fetching maintenance records:", error);
      });
  }, []);

  return (
    <>
    <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Property Management</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-body active" aria-current="page">services</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/header.jpg" alt="" />
                </div>
            </div>
        </div>
  
    <div className="container pt-5">
      <h1 className="text-center">Maintenance Records</h1>
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Maintenance Type</th>
            <th>Date of Maintenance</th>
            <th>Cost of Maintenance</th>
            <th>Type of Property</th>
          
          </tr>
        </thead>
        <tbody>
          {maintenanceRecords.length > 0 ? (
            maintenanceRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.stype}</td>
                <td>{record.date}</td>
                <td>{record.cost}</td>
                <td>{record.hid}</td>
               
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Table;
