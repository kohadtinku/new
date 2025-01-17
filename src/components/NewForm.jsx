import React, { useState } from "react";

const NewForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlelastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name :", name);
    console.log("LastName :", lastName);
    console.log("Email :", email);
    console.log("City :", city);
    console.log("State :", state);
    console.log("Pincode :", pincode);
    alert("Form Submited");
    setName("");
    setEmail("");
    setLastName("");
    setCity("");
    setPincode("");
    setState("");
  };

  return (
    <>
      <form
        className="row g-3 needs-validation"
        novalidate
        onSubmit={handleSubmit}
      >
        <h1>Form With UseState</h1>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            First name
          </label>
          <input
            onChange={handleNameChange}
            type="text"
            className="form-control"
            id="validationCustom01"
            value={name}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            onChange={handlelastNameChange}
            type="text"
            className="form-control"
            id="validationCustom02"
            value={lastName}
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              onChange={handleEmailChange}
              value={email}
              type="email"
              className="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            City
          </label>
          <input
            value={city}
            onChange={handleCityChange}
            type="text"
            className="form-control"
            id="validationCustom03"
            required
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">
            State
          </label>
          <select
            onChange={handleStateChange}
            className="form-select"
            id="validationCustom04"
            value={state}
            required
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option>maharashtra</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">
            Pincode
          </label>
          <input
            onChange={handlePincodeChange}
            value={pincode}
            type="text"
            className="form-control"
            id="validationCustom05"
            required
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </>
  );
};

export default NewForm;
