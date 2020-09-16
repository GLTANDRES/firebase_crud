import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currenId == "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currenId],
      });
  }, [props.currenId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <icon className="fas fa-user"></icon>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <icon className="fas fa-mobile-alt"></icon>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <icon className="fas fa-envelope"></icon>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Save"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
