import React from 'react'

function Header() {

    // Retrieve user data from localStorage
    let user = JSON.parse(localStorage.getItem('mydata'));

    function logout(){
        localStorage.clear();
        window.location = '/';
    }
  return (
    <>
        {/* <!-- Navbar Start --> */}


        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px" }}/>
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-item nav-link active">Home</a>
                        <a href="/about" className="nav-item nav-link">About</a>
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="/signup" className="dropdown-item">Signup</a>
                                <a href="/signin" className="dropdown-item">Signin</a>
                            </div>
                        </div>
                    </div>
                    {user ? (
                                <>
                                                    <div className="navbar-nav ms-auto">
                                                    <a href="/list" className="nav-item nav-link">Property List</a>

                                                    <a href="/service" className="nav-item nav-link">Service</a>
                                                    <a href="/table" className="nav-item nav-link">Manage</a>
                                                    </div>

                                                                                        
                                                        <div className="navbar-nav ms-auto">
                                                            <li>
                                                            <a href="/add" className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                                                            </li>
                                                        
                                                    
                    

                    <li className="nav-item">
                                            <a
                                                href="/"
                                                className="btn btn-style btn-secondary"
                                                onClick={logout}
                                            >
                                                Logout
                                            </a>
                                        </li>
                                        </div>
                </>
                ):(
                    <>
                                        <div className="navbar-nav ms-auto">

                    <a href="/signup" className="btn btn-primary px-3 d-none d-lg-flex">Register</a>
                    </div>
                    </>
                )}
                </div>
            </nav>
        </div>
        {/* <!-- Navbar End --> */}

    </>
  )
}

export default Header;