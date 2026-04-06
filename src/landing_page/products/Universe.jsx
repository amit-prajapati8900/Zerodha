import React from 'react';

export default function Universe() {
  return (
    <>
    <div className="container-fluid">
      <div className=" text-center mt-5 mb-5">
        <p>Want to know more about our technology stack? Check out the</p>
        <p>
          <a href="link" style={{ fontWeight: 'bold', textDecoration: "none" }}>
            Zerodha.tech
          </a> blog.
        </p>
      </div>

      <div className="text-center mt-5 mb-5">
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>The Zerodha Universe</p>
        <p>
          Extend your trading and investment experience even further with our partner platforms.
        </p>
      </div>

      <div className="container-fluid px-5 py-5 mb-5">
        <div className="row px-5" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          
          <div className="col-6 col-md-4 col-lg-3">
            <a href="">
              <img src="/image/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="img-fluid mb-4" />
            </a>
            <p style={{ fontSize: "10px" }}>
              Lorem ipsum dolor ucimus accusamus fugit eius, eveniet voluptates impedit voluptas a ab eum similique provident.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <a href="">
              <img src="/image/sensibullLogo.svg" alt="Sensibull" className="img-fluid mb-4" />
            </a>
            <p style={{ fontSize: "10px" }}>
              Lorem ipsum dolor aerat iusto ducimus accusamus fugit eius, eveniet voluptates impedit voluptas a ab eum similique provident.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <a href="">
              <img src="/image/streakLogo.png" alt="Streak" className="img-fluid mb-4" />
            </a>
            <p style={{ fontSize: "10px" }}>
              Loremmagnam aperiam corporis quaerat iusto ducimus accusamus fugit eius, eveniet voluptates impedit voluptas a ab eum similique provident.
            </p>
          </div>

          <div className="col-6 col-md-4 col-lg-3 mb-5">
            <a href="">
              <img src="/image/smallcaseLogo.png" alt="Smallcase" className="img-fluid mb-4" />
            </a>
            <p style={{ fontSize: "10px" }}>
              Loremt iusto ducimus accusamus fugit eius, eveniet voluptates impedit voluptas a ab eum similique provident.
            </p>
          </div>
        </div>
      </div>

      <div className="align-items-center text-center mb-5 border-bottom">
        <button className="btn btn-primary">Sign up for free</button>
      </div>
      </div>
    </>
  );
}
