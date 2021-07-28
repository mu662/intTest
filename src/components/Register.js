import { Link } from 'react-router-dom';
import React,{Component} from 'react';
import { connect } from 'react-redux';

import DatePicker from "react-datepicker";
import MultiImageInput from 'react-multiple-image-input';
import { Formik } from 'formik';
import {actionRegisterUser} from "../action/common"

import "react-datepicker/dist/react-datepicker.css";


class Register extends React.Component {
  constructor() {
    super();
    this.state ={
      dob: new Date(),
      images: []
    }
  }

  handleSubmit = (values) =>{
    const {dob, images} = this.state;
    if(!dob || images.length === 0) return null;
    console.log('images', images);
    console.log('dob', dob);
    var formData = new FormData();
    formData.append('name', values.name)
    formData.append('hobbies', values.hobbie)
    formData.append('gender', values.gender)
    formData.append('dob', dob)
    formData.append('images', images)
    this.props.actionRegisterUser(formData);
  }

  render() {
    const {dob, images} = this.state;
    const { registeringUser, userRegSucc } = this.props;
    var the = this;
    return (
      <div>
        <div className="container">
        <h2>Register user</h2>    
        <Formik
           initialValues={{ name: '', gender: '' , hobbie: ''}}
           validate={values => {
             const errors = {};
             if (!values.name) {
               errors.name = 'Name is Required';
             } 
             if (!values.gender) {
               errors.gender = 'Gender is Required';
             } 

             if (!values.hobbie) {
               errors.hobbie = 'Hobbies are Required';
             } 
             return errors;
           }}
           onSubmit={(values, { setSubmitting }) => {
              the.handleSubmit(values);
              setSubmitting(false);
             // setTimeout(() => {
             //   alert(JSON.stringify(values, null, 2));
             //   setSubmitting(false);
             // }, 400);
           }}
         >
           {({
             values,
             errors,
             touched,
             handleChange,
             handleBlur,
             handleSubmit,
             isSubmitting,
             /* and other goodies */
           }) => (
             <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="Name">Name:</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              {errors.name && touched.name ? <p>{errors.name} </p> : null}
              
              <div className="form-group">
                <label for="gender">Gender:</label>
                <select name="gender"  onChange={handleChange} className="form-control" style={{height:"40px"}}  id="gender" >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              {errors.gender && touched.gender ? <p>{errors.gender} </p> : null}

            <div className="form-group">
              <label for="DOB">DOB:</label>
              <DatePicker selected={dob} onChange={(date) => this.setState({ dob: date })} />
            </div>
            {!dob || dob === null ? <p>DOB is Required</p> : null}

            <div className="form-group">
               <label for="DOB">Upload images:</label>
              <MultiImageInput
                images={images}
                allowCrop={false}
                setImages={(images) => this.setState({ images: images })}
              />
            </div>
            {images.length === 0 ? <p>Images are Required</p> : null}

            <div className="form-group">
              <label for="hobbie">Hobbie:</label>
              <select name="hobbie" id="hobbie" onChange={handleChange} multiple>
                <option>Reading</option>
                <option>Playing</option>
                <option>Trevling</option>
                <option>Dancing</option>
              </select>
            </div>
            {errors.hobbie && touched.hobbie ? <p>{errors.hobbie} </p> : null}

            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
             </form>
           )}
         </Formik>    
        </div>
        {registeringUser ? <p>Registering</p> : null}
        {userRegSucc ? <p>{userRegSucc.message}</p> : null}
      </div>
    );
  }
}


const mapStateToProps = state => ({ ...state.common });

const mapDispatchToProps = dispatch => ({
    actionRegisterUser: (body) => dispatch(actionRegisterUser(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
