import React from 'react';
export default function Hero() {
  return (
    <div className='container-fluid p-5'>
      <div className='row text-center'>
      <img src="/image/homeHero.png" alt="Hero Image" className='img-fluid mb-4' style={{height:"100%"}} />
      <h1>Investing  in everything</h1>
      <p1>Online platform for investing in stocks, bonds, and more.</p1>
      <button className='btn btn-primary' style={{width: '150px',margin:"0 auto"}}>SignUp now</button>
      </div>
    </div>
  );
}