import React from "react";
export default function CreateTicket() {
    return(
        <>
        <div className="container-fluid">
        <h2 className="mt-5 mb-5"> To create a ticket, select a relevant topic</h2>
            <div className="row mt-5 mb-5">
                <div className="col-4">
                <h4><i class="fa-solid fa-circle"></i> Account Opening</h4>
                <div className="mt-5" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <a href=""> Online Account Opening</a>
                <a href=""> Offline Account Opening</a>
                <a href=""> Account Opening Documents</a>
                <a href=""> Account Opening Process</a>
                <a href=""> Account Opening Requirements</a>
                <a href=""> Account Opening Timeline</a>
                
                </div>
                </div>
                <div className="col-4 mt-5">
                    <h4> <i class="fa-solid fa-circle-user"></i>Your Zerodha Account</h4>
                    <div className="mt-5" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                        <a href="">Manage Account</a>
                        <a href="">Update Profile</a>
                        <a href="">Change Password</a>
                        <a href="">Change Email</a>
                        <a href="">Change Mobile Number</a>
                        <a href="">Change Bank Account</a>
                        <a href="">Change Nominee</a>
                    </div>
                </div>
                <div className="col-4 mt-5">
                    <h4> <i class="fa-solid fa-arrow-trend-down"></i>Your Zerodha Account</h4>
                <div className="mt-5" style={{display:"flex", flexDirection:"column", gap:"10px"}}>
                <a href="">Fund Transfer</a>
                <a href="">Withdraw Funds</a>
                <a href="">Deposit Funds</a>    
                <a href=""> Kite Web and App</a>
                <a href=""> Kite Mobile</a>
                <a href=""> Kite Web</a>
                <a href=""> Kite Desktop</a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}