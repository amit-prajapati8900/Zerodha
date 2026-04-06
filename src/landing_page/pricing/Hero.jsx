import React from "react";
export default function Hero() {
  return (
    <div className="container-fluid">
      <div className="text-center mt-4">
        <h3>Charges</h3>
        <h4 className="text-muted mt-4">List of all charges and taxes</h4>
     </div>
     <div className="row mt-5 p-5">
        <div className="col-4 p-5">
            <img src="/image/pricing0.svg" alt="pricing" />
            <h2>Free equity delivery</h2>
            <p  className="text-muted mt-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
            <img src="/image/intradayTrades.svg" alt="intraday trades" />
            <h2>Intraday and F&O trades</h2>
       <p  className="text-muted mt-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,</p>
       <p  className="text-muted mt-4 ">currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
            <img src="/image/pricingEquity.svg" alt="pricing equity" />
            <h2>Free direct MF</h2>
      <p  className="text-muted mt-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
     </div>
    </div>
  );
}