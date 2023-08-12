import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField, Button, Box } from "@mui/material";
import axios from "axios";
import { validateName } from "../validationFunctions";

interface LoginProps {
  loginCallback: () => void;
}

interface UserProps {
  username: string;
  password: string;
}

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

export const Login: React.FC<LoginProps> = (props: LoginProps) => {
  const { loginCallback } = props;

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const submitLogin = (values: UserProps) => {
    client
      .post("/api/login/", {
        username: values.username,
        password: values.password,
      })
      .then(() => loginCallback())
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
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
          formik.touched.password && validateName(formik.values.password)
        }
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => submitLogin(formik.values)}
      >
        Submit
      </Button>
    </form>
  );
};
