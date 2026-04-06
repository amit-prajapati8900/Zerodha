import React from "react";
export default function Hero() {
  return (
    <div className="container-fluid"> 
        <div className="row" style={{color:"white"}}>
            <div className="col-6 text-center">
                <h4 className="mb-5">Support Portal</h4>
                <h3 > Search for an answer to browser help topic to create a ticket</h3>
                <input type="text" name="" id="" placeholder="Eg: how do i active F&Q, why is my order getting rejected" className="mt-3" style={{height:"60px", width:"100%"}}/>
                <p className="mt-3"><a href="" style={{color:"white"}}> Track account opening </a> <a href="" style={{textDecoration:"none", color:"white"}}> Track support activation </a> <a href="" style={{ color:"white"}}> margin Kite user manual</a>
            </p>
            </div>
            <div className="col-2"></div>
            <div className="col-4 text-center">
            <h4>Feature</h4>
            <ul>
                <li><a href="" style={{color:"white"}}>Current tackover and deling Januray 2026 </a></li>
                <li><a href="" style={{color:"white"}}>Latest intraday leverage - MS & CO</a></li>
            </ul>
            </div>
        </div>
    </div>
  );
}