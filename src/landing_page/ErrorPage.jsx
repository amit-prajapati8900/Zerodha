import React from 'react';
export default function OpenAccount() {
  return (
    <div className="container-fluid mt-5">
      <div className="row text-center mt-5">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>

        {/* Bootstrap Spinner with custom dotted border */}
        <div className="spinner-border custom-spinner mx-auto" role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>

      {/* Custom CSS inside JSX */}
      <style>{`
        .custom-spinner {
          border-top: 0.25em dotted black !important;
        }
      `}</style>
    </div>
  );
}
