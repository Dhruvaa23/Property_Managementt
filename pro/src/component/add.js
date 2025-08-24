import React,{useState} from 'react'
import Axios from 'axios';
import {useForm} from "react-hook-form";

function Add(){

    const {register,handleSubmit,formState:{errors},}=useForm();


function postdata(){
  var pname=document.getElementById('pname').value;

  var ptype=document.getElementById('ptype').value;
  var padd=document.getElementById('padd').value;

  var date=document.getElementById('date').value;


  let formData=new FormData();

  formData.append('filename',filename);
  formData.append('pname',pname);
  formData.append('padd',padd);
  formData.append("ptype",ptype);
  formData.append("date",date);

  Axios.post('http://localhost:1337/api/homepkg',formData,{
    Headers:{"Content-Type":"multipart/form-data"}
  }).then((response)=>{
      alert('success');
      window.location="/list";

  });
  
    


}


const [filename,setfilename]=useState("");

  return (
   <>
        
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">Property List</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-body active" aria-current="page">Property List</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/property-2.jpg" alt="" />
                </div>
            </div>
        </div>
  <div className="pt-5">
  <h1 className="text-center">Add Property</h1>
  <div className="container">
    <div className="row">
      <div className="col-md-5 mx-auto">
        <div className="card card-body">
          {/* Vehicle Management Form */}
          <div className="form-group required">
          <h6 class="mb-3 fw-bold mt-4">Property Name</h6>
            <input
              type="text"
              className="form-control"
              id="pname"
              name="pname"
              placeholder="Enter Property Name*"
              {...register("pname",{required:" Property Name is Mandatory",})} />
              {errors.pname && (<span className='error' style={{color:"red"}}>{errors.pname.message}</span>)}
            </div>
          
          <div className="form-group required">
          <h6 class="mb-3 fw-bold mt-4">Property Type</h6>
            <select className="form-control" id="ptype" name="ptype"  {...register("ptype",{required:"Property Type  is Mandatory",})} >
              <option value="">Select Property Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Commercial">Commercial</option>
              <option value="Office">Office</option>
             
             
            </select>
            {errors.ptype && (<span className='error' style={{color:"red"}}>{errors.ptype.message}</span>)}
          </div>
          <div className="form-group required">
          <h6 class="mb-3 fw-bold mt-4">Property Address</h6>
            <input
              type="text"
              className="form-control"
              id="padd"
              name="padd"
              placeholder="Enter Property Address*"
              {...register("padd",{required:"Property Address is Mandatory",})} />
              {errors.padd && (<span className='error' style={{color:"red"}}>{errors.padd.message}</span>)}
          </div>
          <div className="form-group required">
          <h6 class="mb-3 fw-bold mt-4">Purchase Date</h6>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              {...register("date",{required:"Purchase Date  is Mandatory",})} />
              {errors.date && (<span className='error' style={{color:"red"}}>{errors.date.message}</span>)}
          </div>
          <div className="form-group">
          <h6 class="mb-3 fw-bold mt-4">Property Image</h6>
            <input
              type="file"
              className="form-control-file"
              id="image"
              name="filename"
              onChange={(e)=>setfilename(e.target.files[0])}
            />
          </div>
          
          <div className="form-group pt-1">
            <center>
            <button  type="submit" className="btn btn-primary btn-block" onClick={handleSubmit(postdata)} >
           
              Add Property
              
            </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Add;