import React, { useState } from "react";
import { Button, Checkbox, divage } from "semantic-ui-react";
import {
  useFormik,
  Formik,
  Form as FormikForm,
  ErrorMessage,
  Field,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import ErrorComponent from "./ErrorComponent";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  socialHandle: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: [""],
};

const savedData = {
  name: "mukul",
  email: "m@gmail.com",
  channel: "kutta",
  comment: "wadsad",
  address: "ssd",
  socialHandle: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm()
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Formate").required("Required"),
  channel: Yup.string().required("Required"),
});

const validateComment = (value) => {
  let error;
  if (!value) {
    error = "Requried";
  }
  return error;
};

function NewYoutubeForm() {
  const [formData, setFormData] = useState(null);
  return (
    <Formik
      initialValues={formData || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formikProps) => {
        return (
          <FormikForm>
            <div>
              <label>Name</label>
              <Field placeholder="Name" name="name" />
              <ErrorMessage name="name">
                {(errMsg) => <div className="error">{errMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label>Email</label>
              <Field placeholder="Email" name="email" />
              <ErrorMessage name="email" component={ErrorComponent} />
            </div>
            <div>
              <label>Channel</label>
              <Field placeholder="Channel" name="channel" />
              <ErrorMessage name="channel" component={ErrorComponent} />
            </div>
            <div>
              <label>Comment</label>
              <Field as="textarea" name="comment" validate={validateComment} />
              <ErrorMessage name="comment" component={ErrorComponent} />
            </div>
            <div>
              <label>Address</label>
              <Field name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  // console.log(props);
                  return (
                    <div>
                      <input type="text" {...field}></input>
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </Field>
            </div>
            <div>
              <label>Facebook</label>
              <Field name="socialHandle.facebook" />
            </div>
            <div>
              <label>Twitter</label>
              <Field name="socialHandle.twitter" />
            </div>
            <div>
              <label>Phone Numbers</label>
              <FieldArray name="phoneNumbers">
                {(fieldArrayProps) => {
                  console.log(fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phoneNumbers } = values;
                  return (
                    <>
                      {phoneNumbers.map((pn, ind) => {
                        return (
                          <div>
                            <Field name={`phoneNumbers[${ind}]`} />
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                            {ind > 0 && (
                              <button type="button" onClick={() => remove(ind)}>
                                -
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <button type="reset">reset</button>
            <button
              type="button"
              onClick={() => {
                setFormData(savedData);
              }}
            >
              Load Saved Data
            </button>
            <button
              type="submit"
              disabled={!formikProps.isValid || formikProps.isSubmitting}
            >
              Submit
            </button>
          </FormikForm>
        );
      }}
    </Formik>
  );
}

export default NewYoutubeForm;
