import React from "react";
import {useFormik} from "formik";

function App() {
  function isValidEmail(str) {
    const reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (str.match(reg)) {
      return true;
    }
    return false;
  }

  const errorStyle = {
    color: 'red'
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: values => {
      alert("Login Successful!");
    },

    validate: values => {
      const errors = {}
      if (!values.email) { 
        errors.email = "Field required" 
      } else if (!isValidEmail(values.email)) {
        errors.email = "Username should be an email"
      }
      if (!values.password) { errors.password = "Field required" }

      return errors;
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" id="emailField" name="email" value={formik.values.email} onChange={formik.handleChange}/>
        {formik.errors.email ? <div id="emailError" style={errorStyle}>{formik.errors.email}</div> : null}

        <div>Password</div>
        <input type="text" id="pswField" name="password" value={formik.values.password} onChange={formik.handleChange}/>
        <div id="passwordError"></div>
        {formik.errors.password ? <div id="emailError" style={errorStyle}>{formik.errors.password}</div> : null}

        <br></br>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
