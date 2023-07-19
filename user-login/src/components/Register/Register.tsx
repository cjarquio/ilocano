import * as React from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { validateName, validateEmail, validatePassword, validatePasswordConfirmation } from "../validationFunctions";

export default function Register() {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", username: "", dateOfBirth:  Date.now(), password:"" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
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
