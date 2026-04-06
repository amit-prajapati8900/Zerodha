import React from 'react';
export default function Pricing() {
  return (
    <>
    <div className='container-fluid p-5'>
      <div className="row mt-5">
        <div className='col-4'>
          <h3> Unbrecable priceing </h3>
          <p4>We provide unbeatable pricing for our customers.and so the imge and k lo hion </p4>
          <br />
          <a href='' style={{textDecoration:"none"}}> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 mt-2'>
          <div className='row'>
          <div className='col' style={{border:"1px solid black", textAlign:"center", alignItems:"center", padding:"5px"}}>
            <h1>0</h1>
            <p3>Free equity development and srvect</p3>
          </div>
          <div className='col' style={{border:"1px solid black", textAlign:"center",   alignItems:"center",padding:"5px"}}>
            <h1>20</h1>
            <p3>Premium features and support</p3>
          </div>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}