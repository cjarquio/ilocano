import React, { useState } from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { validateName, validatePassword } from "../validationFunctions";

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

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const submitLogout = () => {
    client
      .post("/api/logout/", { withCredentials: true })
      .then(function (res) {
        setLoggedIn(false);
      })
      .catch((e) => console.error(e));
  };
  const submitLogin = (values: UserProps) => {
    client
      .post("/api/login/", {
        username: values.username,
        password: values.password,
      })
      .catch((e) => console.log(e));
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          submitLogin(values);
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Field name="username" validate={validateName}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.username && form.touched.username)}
              >
                <FormLabel>Username</FormLabel>
                <Input {...field} placeholder="Username" />
                <FormErrorMessage>
                  <>{form.errors.username}</>
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password" validate={validatePassword}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.password && form.touched.password)}
              >
                <FormLabel>Password</FormLabel>
                <Input {...field} type="password" placeholder="New password" />
                <FormErrorMessage>
                  <>{form.errors.password}</>
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
