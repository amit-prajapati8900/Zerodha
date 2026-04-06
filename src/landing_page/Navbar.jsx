import React from 'react';
export default function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img 
        src="/image/logo.svg" 
        alt="Logo" 
        width="160px" 
        height="40" 
        className="img-fluid mx-5"
      />
    </a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse color-gray-400" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5"  style={{color:"black", fontSize:"16px", fontWeight:"500"}}>
        <li className="nav-item mx-2"><a className="nav-link mx-2" href="/signup">SignUp</a></li>
        <li className="nav-item mx-2"><a className="nav-link mx-2" href="/signin">SignIn</a></li>
        <li className="nav-item mx-2"><a className="nav-link mx-2" href="/about">About</a></li>
        <li className="nav-item mx-2"><a className="nav-link mx-2" href="/products">Products</a></li>
        <li className="nav-item mx-2"><a className="nav-link mx-2" href="/pricing">Pricing</a></li>
        <li className="nav-item"><a className="nav-link mx-5" href="/support">Support</a></li>
        <li className="nav-item mx-2"><a className="nav-link mx-5" href="#">  <i className="fas fa-bars"></i></a></li>

      </ul>
    </div>
  </div>
</nav>

    </>
  );
}