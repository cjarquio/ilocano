import React, {useState} from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from 'axios';
import { validateName, validateEmail, validatePassword, validatePasswordConfirmation } from "../validationFunctions";

interface UserProps {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export default function Register() {
  const [loggedIn, setLoggedIn] = useState(false)
  const submitRegistration = (values: UserProps) => {
    client.post(
      "/api/register/",
      {
        first_name: values.firstName,
        last_name: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password,
      }
    )
    .then(() => {
      client.post(
        "/api/login/",
        {
          username: values.username,
          password: values.password
        }
      ).then(() => {
        setLoggedIn(true);
      })
      .catch((e)=>console.log(e))
    })
    .catch(e=>console.error(e));
  }
  
  return (
    <Box>
      {
        !loggedIn ? <Formik
      initialValues={{ firstName: "", lastName: "", email: "", username: "", password:"" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          submitRegistration(values)
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
          <Field name="email" validate={validateEmail}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.email && form.touched.email)}
              >
                <FormLabel>Email</FormLabel>
                <Input {...field} placeholder="Email" />
                <FormErrorMessage>
                  <>{form.errors.email}</>
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
          <Field name="passwordConfirmation" validate={(value: string) => validatePasswordConfirmation(value, props.values.password)}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.passwordConfirmation && form.touched.passwordConfirmation)}
              >
                <FormLabel>Confirm Password</FormLabel>
                <Input {...field} type="password" placeholder="Confirm Password" />
                <FormErrorMessage>
                  <>{form.errors.passwordConfirmation}</>
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="firstName" validate={validateName}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.firstName && form.touched.firstName)}
              >
                <FormLabel>First Name</FormLabel>
                <Input {...field} placeholder="First Name" />
                <FormErrorMessage>
                  <>{form.errors.firstName}</>
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="lastName" validate={validateName}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!(form.errors.lastName && form.touched.lastName)}
              >
                <FormLabel>Last name</FormLabel>
                <Input {...field} placeholder="Last Name" />
                <FormErrorMessage>
                  <>{form.errors.lastName}</>
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
    </Formik> : <>Logged in</>
      }
    </Box>
  );
}
