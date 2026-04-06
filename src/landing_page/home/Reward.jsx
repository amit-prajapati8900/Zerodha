import React from 'react';
export default function Reward() {
  return (
    <div className='container-fluid p-5'>
      <div className='row mt-5'> 
        <div className='col-6'>
          <img src='/image/largestBroker.svg' alt='Reward Image' className='img-fluid' style={{height:"100%"}}/>
        </div>
        <div className='col-6 mt-2'>
          <h1>Rewarding Your Investments</h1>
          <p>Earn rewards and benefits as you invest with us. Our platform offers a range of incentives to help you grow your wealth while enjoying exclusive perks.</p>
          <div className='row mt-4'>
            <div className='col-6'>
              <ul >
                <li>futures trading</li>
                <li>options trading</li>
                <li>margin trading</li>
              </ul>
            </div>
            <div className='col-6'>
              <ul >
                <li>exclusive discounts</li>
                <li>customer support</li>
                <li>Bright future</li>
              </ul>
            </div>
              <img src='/image/pressLogos.png' alt='Press Logos' className='img-fluid' />  
          </div>
        </div>
        </div>
    </div>
  );
}