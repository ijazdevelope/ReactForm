import React, { useState, useEffect } from "react";
import "../src/App.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Form() {
  const [inputValue, setInputvalue] = useState({
    fname: "",
    lname: "",
    cnic: "",
    cnicIssuance: "",
    mobile: "",
    email: "",
    province: "",
    relegion: "",
    qualification: "",
    dob: "",
    favLanguages: {
      javascript: "",
      reactjs: "",
      nodejs: "",
      python: "",
      c: "",
    },
    description: "",
    password: "",
    cpassword: "",
    gender: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (e.target.type === "radio") {
      setInputvalue({ ...inputValue, [name]: value });
      //   if (e.target.name === "gender") {
      //     console.log(value);
      //     setInputvalue({ ...inputValue, gender: value });
      //   } else {
      //     setInputvalue({ ...inputValue, relegion: value });
      //   }
    } else if (e.target.type === "checkbox") {
      let { favLanguages } = { ...inputValue };
      favLanguages[name] = e.target.value;
      setInputvalue({ ...inputValue, favLanguages });
    } else {
      setInputvalue({ ...inputValue, [name]: value });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  /////////////// DatePicker
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <h1 classNameName="text-uppercase my-4 text-uppercas">my form</h1>
      <form className="p-3" onSubmit={submitForm}>
        <div className="row pr-3">
          <div className="col-md-8 pl-0">
            <div className="form-group col-md-12">
              <label for="First Name" className="d-flex">
                First Name
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="First Name"
                placeholder="Enter Your First Name"
                autocomplete="off"
                name="fname"
                value={inputValue.fname}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="Last Name" className="d-flex">
                Last Name
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="Last Name"
                placeholder="Enter Your Last Name"
                name="lname"
                value={inputValue.lname}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="cnic" className="d-flex">
                CNIC
              </label>
              <input
                onChange={handleInputChange}
                type="number"
                className="form-control"
                id="cnic"
                placeholder="xxxxx-xxxxxxx-x"
                name="cnic"
                value={inputValue.cnic}
              />
            </div>
            <div className="form-group col-md-12">
              <label for="inputPassword4" className="d-flex">
                CNIC Issuance Date And Time
              </label>
              <div class="input-group">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  // maxDate={new Date()}
                />
                {/* <input
                  onChange={handleInputChange}
                  type="text"
                  class="form-control"
                  placeholder="10/22/2021 10:20 PM"
                  name="cnicIssuance"
                  value={inputValue.cnicIssuance}
                /> */}
                {/* <div class="input-group-append">
                  <button class="btn bg-white" type="button">
                    <i class="fas fa-calendar-times"></i>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 input_type_file_parent">
            <label
              for="uploajavascript:d-photo"
              className="uploadPhoto d-block my-auto"
            >
              Please Choose An Image
            </label>
            <input type="file" name="photo" id="upload-photo" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label for="mobile" className="d-flex">
              Mobile
            </label>
            <input
              onChange={handleInputChange}
              type="number"
              className="form-control"
              id="mobile"
              placeholder="03xx-xxxxxxx"
              name="mobile"
              value={inputValue.mobile}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="email" className="d-flex">
              Email
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Your Email"
              name="email"
              value={inputValue.email}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="state" className="d-flex">
              Select Your Province Or State
            </label>
            <div class="form-group">
              <select
                class="form-control"
                id="sel1"
                onChange={handleInputChange}
                name="province"
                value={inputValue.ppovince}
              >
                <option value="Select Your Province">
                  Select Your Province
                </option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="Kpk">Kpk</option>
                <option value="Balochistan">Balochistan</option>
              </select>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label for="email" className="d-flex">
              Select Your Faviorites Games
            </label>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Please Select Games"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span
                  className="input-group-text bg-success text-white"
                  id="basic-addon2"
                >
                  Select
                </span>
              </div>
            </div>
          </div>
          <div className="pl-3 col-md-12">
            <div className="col-md-12 rounded roundedZero greenBorder">
              <label htmlFor="reregion" className="d-flex">
                Relegion
              </label>
              <div className="d-flex flex-wrap">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Islam"
                    id="islam"
                    name="relegion"
                    checked={inputValue.relegion === "Islam"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="islam">
                    Islam
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Christian"
                    id="christian"
                    name="relegion"
                    checked={inputValue.relegion === "Christian"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="christian">
                    Christian
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Hinduism"
                    id="hiduism"
                    name="relegion"
                    checked={inputValue.relegion === "Hinduism"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="hiduism">
                    Hinduism
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Buddhism"
                    id="buddhism"
                    name="relegion"
                    checked={inputValue.relegion === "Buddhism"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="buddhism">
                    Buddhism
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Sikhism"
                    id="sikhism"
                    name="relegion"
                    checked={inputValue.relegion === "Sikhism"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="sikhism">
                    Sikhism
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Atheist"
                    id="atheist"
                    name="relegion"
                    checked={inputValue.relegion === "Atheist"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="atheist">
                    Atheist
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="other"
                    id="other"
                    name="relegion"
                    checked={inputValue.relegion === "other"}
                    onChange={handleInputChange}
                  />
                  <label className="form-check-label" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group col-md-6 mt-3">
            <label for="qualification" className="d-flex">
              Enter Your Highest Qualification
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="qualification"
              placeholder="Highest Qualification"
              name="qualification"
              value={inputValue.qualification}
            />
          </div>
          <div className="form-group col-md-6 mt-3">
            <label for="dob" className="d-flex">
              Choose Your DOB
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="dob"
              placeholder="Please Choose Your Date Of Birth"
              name="dob"
              value={inputValue.dob}
              javascript
            />
          </div>
        </div>
        <div className="col-md-12 pl-0 roundedZero mt-3">
          <div className="col-md-12 roundedZero greenBorder">
            <label htmlFor="reregion" className="d-flex">
              Favourite Languages
            </label>
            <div className="d-flex flex-wrap">
              <div className="form-check">
                <input
                  onChange={handleInputChange}
                  className="form-check-input"
                  type="checkbox"
                  value="javascript"
                  checked={inputValue.favLanguages.javascript === "javascript"}
                  id="javascript"
                  name="javascript"
                />
                <label className="form-check-label" for="javascript">
                  JavaScript
                </label>
              </div>
              <div className="form-check ml-5">
                <input
                  onChange={handleInputChange}
                  className="form-check-input"
                  type="checkbox"
                  value="reactjs"
                  checked={inputValue.favLanguages.reactjs === "reactjs"}
                  id="reactjs"
                  name="reactjs"
                />
                <label className="form-check-label" for="reactjs">
                  React Js
                </label>
              </div>
              <div className="form-check ml-5">
                <input
                  onChange={handleInputChange}
                  className="form-check-input"
                  type="checkbox"
                  value="nodejs"
                  checked={inputValue.favLanguages.nodejs === "nodejs"}
                  id="nodejs"
                  name="nodejs"
                />
                <label className="form-check-label" for="nodejs">
                  Node Js
                </label>
              </div>
              <div className="form-check ml-5">
                <input
                  onChange={handleInputChange}
                  className="form-check-input"
                  type="checkbox"
                  value="python"
                  checked={inputValue.favLanguages.python === "python"}
                  id="python"
                  name="python"
                />
                <label className="form-check-label" for="python">
                  Python
                </label>
              </div>
              <div className="form-check ml-5">
                <input
                  onChange={handleInputChange}
                  className="form-check-input"
                  type="checkbox"
                  value="c"
                  checked={inputValue.favLanguages.c === "c"}
                  id="c,c++"
                  name="c"
                />
                <label className="form-check-label" for="c,c++">
                  C,C++
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-3">
          <label for="validationTextarea" class="form-label d-flex">
            Description
          </label>
          <textarea
            onChange={handleInputChange}
            class="form-control"
            id="validationTextarea"
            name="description"
            value={inputValue.description}
          ></textarea>
          {/* <div class="invalid-feedback">
            Please enter a message in the textarea.
          </div> */}
        </div>
        <div className="row mt-3">
          <div className="form-group col-md-6">
            <label for="password" className="d-flex">
              Password
            </label>
            <input
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={inputValue.password}
            />
          </div>
          <div className="form-group col-md-6">
            <label for="confirm-passowrd" className="d-flex">
              Confirm Password
            </label>
            <input
              onChange={handleInputChange}
              type="password"
              className="form-control"
              id="confirm-passowrd"
              placeholder="Confirm Password"
              name="cpassword"
              value={inputValue.cpassword}
            />
          </div>
          <div className="col-md-12 pl-3 pr-3">
            <div className="col-md-12 roundedZero greenBorder form-group">
              <label htmlFor="reregion" className="d-flex">
                Gender:
              </label>
              <div className="d-flex flex-wrap">
                <div className="form-check">
                  <input
                    onChange={handleInputChange}
                    className="form-check-input"
                    type="radio"
                    value="male"
                    id="male"
                    name="gender"
                    checked={inputValue.gender === "male"}
                  />
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    onChange={handleInputChange}
                    className="form-check-input"
                    type="radio"
                    value="female"
                    id="female"
                    name="gender"
                    checked={inputValue.gender === "female"}
                  />
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check ml-5">
                  <input
                    onChange={handleInputChange}
                    className="form-check-input"
                    type="radio"
                    value="other1"
                    id="other1"
                    name="gender"
                    checked={inputValue.gender === "other1"}
                  />
                  <label className="form-check-label" for="other1">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 p-0">
          <button type="submit" className="btn btn-primary col-lg-12 ">
            SUBMIT DATA
          </button>
        </div>
      </form>
    </div>
  );
  {
  }
}

export default Form;
