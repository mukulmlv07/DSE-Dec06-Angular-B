import React from "react";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues= {
  name: "",
  email: "",
  channel: "",
  
}

const onSubmit = values=>{
  console.log(values)
}

const validate = values=>{
  const errors = {}
  if(!values.name){
    errors.name="Requried"
  }
  if(!values.email){
    errors.email="Requried"
  }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email))){
    errors.email="Please Provide correct formate"
  }
  if(!values.channel){
    errors.channel="Requried"
  }
  return errors
}

const validationSchema=Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid Email Formate').required('Required'),
  channel:Yup.string().required('Required')
})

function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate
    validationSchema
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Name"
          name="name"
          {...formik.getFieldProps('name')}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.name}
        />
         {formik.touched.name && formik.errors.name ? <div color="red">{formik.errors.name}</div> : null}
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="Email"
          name="email"
          {...formik.getFieldProps('email')}

          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.email}
        />
         {formik.touched.email && formik.errors.email ? <div color="red">{formik.errors.email}</div> : null}
       
      </Form.Field>
      <Form.Field>
        <label>Channel</label>
        <input
          placeholder="Channel"
          name="channel"
          {...formik.getFieldProps('channel')}

          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
          // value={formik.values.channel}
        />
         {formik.touched.channel && formik.errors.channel ? <div color="red">{formik.errors.name}</div> : null}

      </Form.Field>
      {/* <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field> */}
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default YoutubeForm;
