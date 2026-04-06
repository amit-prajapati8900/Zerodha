import React from 'react';
export default function Education() {
  return (
    <>
    <div className='row'>
      <div className='col-6 p-5'>
        <img src="/image/education.svg" alt="education"  className='img-fluid mb-4' style={{height:"100%"}}/>
      </div>
      <div className='col-6'>
        <div className='mt-5'>
        <h3 >Free and opne market educations</h3>
        <p4>We provide free and open market education to empower our customers to make informed investment decisions. Our educational resources cover a wide range of topics, including stock market basics, investment strategies, technical analysis.</p4> 
        <br />
        <a href="" style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
        <br />
        </div>
        <div className='mt-4'>
        <p4 className="mt-4"> Whether you're a beginner or an experienced investor, our educational materials are designed to help you navigate the complexities of the financial markets and enhance your trading skills</p4>
        <br />
        <a href='' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
      </div>
      </div>
    </div>
    </>
  );
}