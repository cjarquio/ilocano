import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordConfirmation,
} from "../validationFunctions";
import { TextField, Button } from "@mui/material";

interface RegisterProps {
  loginCallback: () => void;
}

// interface UserProps {
//   firstName: string;
//   lastName: string;
//   username: string;
//   email: string;
//   password: string;
// }

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
  const { loginCallback } = props;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: (values) => {
      client
      .post("/api/register/", {
        first_name: values.firstName,
        last_name: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then(() => {
        client
          .post("/api/login/", {
            username: values.username,
            password: values.password,
          })
          .then(() => loginCallback())
          .catch((e) => console.log(e));
      })
      .catch((e) => console.error(e));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && !formik.values.firstName}
        helperText={
          formik.touched.firstName && validateName(formik.values.firstName)
        }
      />
      <TextField
        fullWidth
        id="lastName"
        name="lastName"
        label="Last Name"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && !formik.values.lastName}
        helperText={
          formik.touched.lastName && validateName(formik.values.lastName)
        }
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && !formik.values.email}
        helperText={formik.touched.email && validateEmail(formik.values.email)}
      />
      <TextField
        fullWidth
        id="username"
        name="username"
        label="Username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && !formik.values.username}
        helperText={
          formik.touched.username && validateName(formik.values.username)
        }
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && !formik.values.password}
        helperText={
          formik.touched.password && validatePassword(formik.values.password)
        }
      />
      <TextField
        fullWidth
        id="passwordConfirmation"
        name="passwordConfirmation"
        label="Confirm Password"
        type="password"
        value={formik.values.passwordConfirmation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.passwordConfirmation &&
          !formik.values.passwordConfirmation
        }
        helperText={
          formik.touched.passwordConfirmation &&
          validatePasswordConfirmation(
            formik.values.passwordConfirmation,
            formik.values.password
          )
        }
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => formik.handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};
