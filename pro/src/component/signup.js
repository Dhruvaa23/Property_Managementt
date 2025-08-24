import React,{useState} from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
import {useForm} from "react-hook-form";


function Signup()  {


  const {register,handleSubmit,formState:{errors},}=useForm();

   
    function datasubmit() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const pass = document.getElementById('pass').value;
    
      console.log("Data to send:", { name, email, pass });
    
      Axios.post('http://localhost:1337/api/addpkg', { name, email, pass })
        .then((response) => {
          if (response.data.message) {
            Swal.fire({
              title: 'Success',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'ok',
            }).then(function () {
              window.location = "/signin";
            });
          }
        })
        .catch((error) => {
          console.error("Error in Axios request:", error);  // Log the error
          Swal.fire({
            title: 'Error',
            text: error.response?.data?.error || 'Failed to submit data',
            icon: 'error',
            confirmButtonText: 'ok',
          });
        });
    }
    
        
  return (
    <>
      <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">SignUp</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-body active" aria-current="page">services</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/property-1.jpg" alt="" />
                </div>
            </div>
        </div>
        <section id="login" class="p_3">
 <div class="container-xl">
  <div class="row login_1">
    <div class="col-md-12">
      <div class="login_1m p-4 w-50 mx-auto bg-light">
	      <h2 class="text-center mb-3">Register </h2>
		  <h6 class="mb-3 fw-bold">Username</h6>
		  <input class="form-control" placeholder="Username" type="text" id="name"  {...register("name",{required:"Name is Mandatory",})}
      />
      {errors.name && (<span className='error' style={{color:"red"}}>{errors.name.message}</span>)}

		  <h6 class="mb-3 fw-bold mt-4">Email</h6>
		  <input class="form-control" placeholder="Email Address" type="email" id="email" {...register("email",{required:"Email is Mandatory",})}
      />
       {errors.email && (<span className='error' style={{color:"red"}}>{errors.email.message}</span>)}

		   <h6 class="mb-3 fw-bold mt-4">Password</h6>
		  <input class="form-control" placeholder="Password" type="Password" id="pass" {...register("pass",{required:"Password is Mandatory",})}
      />
      {errors.pass && (<span className='error' style={{color:"red"}}>{errors.pass.message}</span>)}

		  <div class="form-check mt-3">
        <input type="checkbox" class="form-check-input" id="customCheck1" />
        <label class="form-check-label" for="customCheck1">Agree to our <a class="fw-bold" href="#">terms & conditions</a></label>
    </div>
    {/* <button type="submit" onClick={handleSubmit(datasubmit)}
		  className="mt-3 center_sm"><a className="button_2 d-block text-center"  href="#">SIGN UP</a>
      </button> */}
      <center>
      <button type="submit" onClick={handleSubmit(datasubmit)} className="btn btn-primary btn-block"
      >
  SIGN UP
</button>
</center>

		  <p class="mt-3 mb-0 text-center">Already have an account?  <a class="fw-bold col_blue" href="/signin"> Login</a></p>
		</div>
   </div>
  </div>
 </div>
</section>

    </>
  )
}

export default Signup;