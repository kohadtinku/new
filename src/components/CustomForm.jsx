import React, { useState } from "react";

const CustomForm = () => {
  const [formData, setFormData] = useState(
    {
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  }
);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form has successfully Submited");

    setFormData({
      email: "",
      password: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <>
      <form class="row g-3" onSubmit={handleSubmit}>
        <h1>This is form with object </h1>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            class="form-control"
            id="inputEmail4"
            name="email"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={handleChange}
            value={formData.password}
            type="password"
            class="form-control"
            id="inputPassword4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            value={formData.address}
            onChange={handleChange}
            name="address"
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input
            type="text"
            name="city"
            onChange={handleChange}
            value={formData.city}
            class="form-control"
            id="inputCity"
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select
            name="state"
            id="inputState"
            onChange={handleChange}
            value={formData.state}
            class="form-select"
          >
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            type="text"
            class="form-control"
            id="inputZip"
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
};

export default CustomForm;
