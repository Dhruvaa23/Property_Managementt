import React from 'react';
import Swal from 'sweetalert2';
import Axios from 'axios';
function Signin()  {
	

		
	  
	 function submit(){
		var email=document.getElementById('email').value;
    	var pass=document.getElementById('pass').value;

			  
			  Axios.post('http://localhost:1337/api/data_verify',{email:email,pass:pass}).then((response)=>{
				
				if(response.data.message){
				  Swal.fire({
					title:'incorrect',
					text:response.data.message,
					icon:'error',
					confirmButtonText:'ok',
					}).then(function(){
					  window.location="/login";
					})
				  // alert(response.data.message);
				  // window.location="/login";
				}else{
				  let obj={name:response.data[0].name,email:email}
				  localStorage.setItem('mydata',JSON.stringify(obj));
				  Swal.fire({
					title:'correct',
					text:'welcome'+ response.data[0].name,
					icon:'sucess',
					confirmButtonText:'ok',
					}).then(function(){
					  window.location="/";
					})
				  
				}
			  })
		  }
  return (
    <>
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">SignIn</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item text-body active" aria-current="page">services</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/property-4.jpg" alt="" />
                </div>
            </div>
        </div>
<section id="login" class="p_3">
 <div class="container-xl">
  <div class="row login_1">
    <div class="col-md-12">
      <div class="login_1m p-4 bg-light w-50 mx-auto">
	   <h2 class="text-center mb-3">Login </h2>
	   <h6 class="mb-3 fw-bold mt-4">Email</h6>

		  <input class="form-control" placeholder="Email" type="email" id="email" />
		   <h6 class="mb-3 fw-bold mt-4">Password</h6>
		  <input class="form-control" placeholder="Password" type="Password" id="pass" />
		  <div class="login_1mi row mt-3">
		    <div class="col-md-6 col-6">
			  <div class="login_1mil">
			    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="customCheck1" />
        <label class="form-check-label" for="customCheck1">Remember Me</label>
    </div>
			  </div>
			</div>
			<div class="col-md-6 col-6">
			  <div class="login_1mir text-end">
			    <h6 class="mb-0"><a href="#">Forgot Password?</a></h6>
			  </div>
			</div>
		  </div>
		  {/* <h6 class="mt-3 center_sm"><a className="button_2 d-block text-center" className="btn btn-primary w-100 py-3" href="#">LOGIN</a></h6> */}
			<center>
		  <button  type="submit" onClick={submit} className="btn btn-style btn-primary">LOGIN</button>
		  </center>
		  <p class="mt-3 mb-0 text-center">Don't have an account? <a class="fw-bold a_tag col_blue" href="/signup">Create One</a></p>
		</div>
   </div>
  </div>
 </div>
</section>
    </>
  )
}

export default Signin;