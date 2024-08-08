
# Registration Form Project

This project is a simple registration form built with **React**. The form is designed to collect user information like name, email, and password and includes validation to ensure the inputs meet certain criteria. The project makes use of modern React practices and libraries such as **Formik** for form handling and **Yup** for validation.

## Table of Contents
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Features](#features)
- [Usage of Formik](#usage-of-formik)
- [Usage of Yup](#usage-of-yup)
- [CSS Styling](#css-styling)

## Demo
A live demo of the project can be accessed [here](https://form-validation-eight-bay.vercel.app/) .

## Tech Stack
- **React**: A JavaScript library for building user interfaces.
- **Formik**: A library for building forms in React with ease.
- **Yup**: A JavaScript schema builder for value parsing and validation.
- **CSS**: Used for styling the components.

## Project Setup

### Prerequisites
- Node.js
- npm or yarn
   
## Features
- **Form Validation**: Real-time validation of form inputs using Formik and Yup.
- **Responsive Design**: The form layout adjusts for different screen sizes.
- **Error Handling**: Provides user-friendly error messages.

## Usage of Formik
Formik is used in this project to manage the form state and handle form submission. It simplifies form handling by providing methods for validation, submission, and resetting form data.

### Key Features:
- **Initial Values**: Formik allows setting initial form values with the `initialValues` object.
- **Validation**: The `validationSchema` property is used to apply Yup validation to the form fields.
- **Form Submission**: Formik’s `onSubmit` method handles form submission logic, including resetting the form fields after a successful submission.
- **Handling Changes**: Formik provides `handleChange`, `handleBlur`, and other helper functions to manage form inputs effectively.

Example:
```javascript
const formik = useFormik({
  initialValues,
  validationSchema: signUpSchema,
  onSubmit: (values, action) => {
    console.log(values);
    action.resetForm();
  },
});
```

## Usage of Yup
Yup is utilized in this project to validate the form fields. It allows you to define a schema, against which the form inputs are validated. Each field can have multiple validation rules like required fields, minimum length, and email format checks.

### Example Schema:
```javascript
import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email("Invalid email").required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords must match")
    .required("Please confirm your password"),
});
```

## CSS Styling
The project uses custom CSS for styling. It includes:
- **Responsive Layout**: The form is responsive, adjusting its layout for different screen sizes using media queries.
- **Error Messages**: Styled to be clear and noticeable, improving the user experience.
- **Button States**: The submit button changes appearance based on whether the form is completely filled out or not.


