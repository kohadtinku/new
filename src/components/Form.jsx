import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");



    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };

  const handleChange = (e) => {
    // setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("name :", name);
    console.log("email :", email);
    console.log("address :", address);

    // console.log(formdata);
   
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>

            <input
              name="name"
                onChange={handleNameChange}
              // onChange={handleChange}
              value={name}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              value={email}
                onChange={handleEmailChange}
              // onChange={handleChange}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              name="address"
              value={address}
                onChange={handleAddressChange}
              // onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
