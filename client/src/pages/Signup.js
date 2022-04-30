import React, {useEffect,useState } from "react";
// import "./Login.css";
import "./Signup.css";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function Signup() {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);
  let navigate = useNavigate();

  const initialValues = {
    email:"",
    password:"",
    firstName:"",
    lastName:"",
  };

  function handleTextChange(text) {
    setValue(text);
  
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: Yup.string().min(5).max(255).required('Password is required'),
    firstName: Yup.string().min(3).max(255).required('First name is required'),
    lastName: Yup.string().min(3).max(255).required('Last name is required'),
  });

  const onSubmit = (data)=>{
  
    axios.post("http://localhost:3000/auth/createUser",data).then(()=>{
      navigate('/Home');
    });

  };

  return (
    <div class = "container">
    <div className="child">
      <div className="signup-form">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
      <Form className="formContainer">
      <h1 className="signup-header">Create an Account</h1>
      
      <div class="inputContainer">
        <label className="input">Email:
          </label>
          <ErrorMessage name="email" component="span" />
          <Field className = "input"
            id="inputRegister"
            name="email"
            placeholder="Your Email"
            type = "email"
          />
        </div>

        <div class ="inputContainer">
          <label>First Name: 
          </label>
          <ErrorMessage name="firstName" component="span" />
          <Field className = "input"
            id="inputRegister"
            name="firstName"
            placeholder="Your First Name"
            type = "name"
          />
        </div>

           <div class="inputContainer">
           <label>Last Name: 
           </label>
           <ErrorMessage name="lastName" component="span" />
          <Field className = "input"
            id="inputRegister"
            name="lastName"
            placeholder="Your Last Name"
            type = "name"
          />
        </div>

           <div class="inputContainer">
          <label >Password:
          </label>
          <ErrorMessage name="password" component="span" />
          <Field className = "input"
            type="password"
            id="inputRegister"
            name="password"
            placeholder="Your Password..."
          />
        </div>

          <button type="submit" className="submitBtn"> Sign Up </button>
        </Form>
      </Formik>
     
       {/* {isSubmitted ? <div>User is successfully signed up</div> : renderForm}*/}
      </div>
    </div>
    <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
  </div>
  );

}


export default Signup;
