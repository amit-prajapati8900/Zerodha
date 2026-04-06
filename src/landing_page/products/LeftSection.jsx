import React from "react";
export default function LeftSection({images,title,description,link1,link2,link3,link4}){
    return(
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={images} alt="product" className="img-fluid"/>  
                </div>
                <div className="col-6">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="row">
                    <div className="col-6">
                        <p> {link1}</p>
                        <p>{link2}</p>
                    </div>
                    <div className="col-6">
                    <p>{link3}</p>
                    <p>{link4}</p>    
                    </div>      
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}