import React from "react";
import {footer} from 'react-bootstrap';
function Footer(){
console.log("hello");
    return(
  <footer className="text-center text-white">
    <div className="container p-4 pb-0">
      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
    </div>
    <div className="text-center p-3">
    </div>
  </footer>
    );
};
export default Footer; 