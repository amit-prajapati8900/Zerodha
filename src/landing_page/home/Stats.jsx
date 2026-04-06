import React from 'react';
export default function Stats() {
  return (
    <div className='container-fluid p-5'>
      <div className='row mt-5'>
        <div className='col-6 mt-5'>
       <h2>Trust with confidence</h2>
       <h4 className='pt-3'>Customer-first alwayas</h4>
        <p3 className='pt-3'>We are committed to providing a secure and transparent trading experience for our customer</p3>
       <h4 className='pt-3'>Customer-first alwayas</h4>
        <p3 className='pt-3'>We are committed to providing a secure and transparent trading experience for our customers.</p3>
       <h4 className='pt-3'>Do better with money</h4>
        <p3 className='pt-3'>We are committed to providing a secure and transparent trading experience for our customers  .</p3>
        </div>
        <div className='col-6 mt-5'>
          <img src='/image/ecosystem.png' alt='Stats Image' className='img-fluid'  style={{height:"90%", width:"100%"}}/>
          <div className='row ml-4'>
            <div className='col-6' >
            <a href='' style={{textDecoration:"none"}}> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-6'> 
            <a href='' style={{textDecoration:"none"}}> Try kite demo<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}   