import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";

function Service(){

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [homeRecords, setHomeRecords] = useState([]);
  useEffect(() => {
    // Fetch car records from the API
    fetchhomeRecords();
  }, []);

  const fetchhomeRecords = () => {
    Axios.get("http://localhost:1337/api/home")
      .then((response) => {
        setHomeRecords(response.data);
      })
      .catch((error) => {
        console.error("Error fetching car records:", error);
      });
  };

  function postdata(){
    var stype=document.getElementById('stype').value;
    var date=document.getElementById('date').value;
    var cost=document.getElementById('cost').value;
     var hid=document.getElementById('hid').value;
  
   
    
  
    console.log("Data to send:",{stype,date,cost,hid});
  
     Axios.post('http://localhost:1337/api/managepkg', { stype,date,cost,hid

     }).then((response)=>{
      alert('success');
      window.location="/table";

  });
  
   
  }
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
                    <img class="img-fluid" src="img/property-5.jpg" alt="" />
                </div>
            </div>
        </div>
        <section id="login" class="p_3">
 <div class="container-xl">
  <div class="row login_1">
    <div class="col-md-12">
      <div class="login_1m p-4 w-50 mx-auto bg-light">
	      <h2 class="text-center mb-3">Maintenance </h2>
		  <h6 class="mb-3 fw-bold">Service Type</h6>
		  
                            <select className="form-control" id="stype" {...register("stype", { required: "Service Type is mandatory" })}>
                                <option value="">Select Service Type</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="General_Maintenance">General Maintenance</option>
                                <option value="Painting">Painting</option>
                                <option value="Furniture_Assembly">Furniture Assembly</option>
                                
                            </select>
                            {errors.stype && <span className="text-danger">{errors.stype.message}</span>}

		  <h6 class="mb-3 fw-bold mt-4">Date of Maintenance</h6>
      
                            <input type="date" className="form-control" id="date" {...register("date", { required: "Date is mandatory" })} />
                            {errors.date && <span className="text-danger">{errors.date.message}</span>}
                        

		   <h6 class="mb-3 fw-bold mt-4">Cost of Maintenance</h6>
       
                            <input type="number" className="form-control" id="cost" placeholder="Cost of Maintenance*" {...register("cost", { required: "Cost is mandatory" })} />
                            {errors.cost && <span className="text-danger">{errors.cost.message}</span>}
      <h6 class="mb-3 fw-bold mt-4">Select Property</h6>

                            
                            <select className="form-control" id="hid" {...register("hid", { required: "Selecting a Property is mandatory" })}>
                                <option value="">Select Property</option>
                                {homeRecords.map(home => (
                                    <option key={home.pid} value={home.pid}>
                                        {home.pname} ({home.padd})
                                    </option>
                                ))}
                            </select>
                            {errors.hid && <span className="text-danger">{errors.hid.message}</span>}
                            <div>
                              
		  <center>
      <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit(postdata)}>
  Submit Maintenance Record
</button>
</center>
</div>

		 
		</div>
   </div>
  </div>
 </div>
</section>
    </>
  )
}

export default Service;