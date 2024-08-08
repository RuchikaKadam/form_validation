import React from "react";
import "./styles.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const InputField = ({
  name,
  type,
  label,
  value,
  handleChange,
  handleBlur,
  error,
  touched,
}) => (
  <div className="input-group">
    <label htmlFor={name} className="label">
      {label}
    </label>
    <input
      type={type}
      autoComplete="off"
      name={name}
      id={name}
      placeholder={label}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {error && touched && <p className="error-message">{error}</p>}
  </div>
);

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;
  const isFormFilled =
    values.name && values.email && values.password && values.confirm_password;

  return (
    <div className="wrapper">
      <div className="form-container">
        <div className="form-content">
          <div className="form-left">
            <h1 className="form-title">Welcome!</h1>
            <p className="form-description">Fill the below form to Sign up.</p>
            <form onSubmit={handleSubmit}>
              <InputField
                name="name"
                type="text"
                label="Name"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
              <InputField
                name="email"
                type="email"
                label="Email"
                value={values.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <InputField
                name="password"
                type="password"
                label="Password"
                value={values.password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
              <InputField
                name="confirm_password"
                type="password"
                label="Confirm Password"
                value={values.confirm_password}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.confirm_password}
                touched={touched.confirm_password}
              />
              <div className="form-buttons">
                <button
                  className={`submit-button ${!isFormFilled ? "disabled" : ""}`}
                  type="submit"
                  disabled={!isFormFilled}
                >
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
          <div className="form-right">
            <img
              src="https://www.shutterstock.com/image-vector/register-access-login-password-internet-260nw-1836823672.jpg"
              alt="temp photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
