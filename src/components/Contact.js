import { useState } from "react";
import { useDispatch } from 'react-redux';
import { SET_NAME,SET_EMAIL,SET_MOBILENO } from "../store/reducer";
const Contact = () => {
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
      dispatch(SET_NAME(event.target.value));
    };
  
    const handleEmailChange = (event) => {
      dispatch(SET_EMAIL(event.target.value));
    };
  
    const handleMobileNumberChange = (event) => {
      dispatch(SET_MOBILENO(event.target.value));
    };
  return (
    <div className="row  justify-content-center text-start">
      <form action="" className="col-3 border">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input type="text" onChange={handleNameChange} className="form-control" />
        </div>
       <div className="mb-3">
       <label htmlFor="" className="form-label">
          Mobile
        </label>
        <input type="tel" onChange={handleMobileNumberChange} className="form-control" />
       </div>
        <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input type="email" onChange={handleEmailChange} name="" id="" className="form-control" />
        </div>
      
      </form>
    </div>
  );
};

export default Contact;
