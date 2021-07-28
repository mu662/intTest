import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import { connect } from 'react-redux';

import DatePicker from "react-datepicker";
import MultiImageInput from 'react-multiple-image-input';
import { Formik } from 'formik';
import {actionUpdateUser} from "../action/common"

import "react-datepicker/dist/react-datepicker.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state ={
      dob: new Date(),
      images: []
    }
  }

  componentDidMount(){
    const { match, usersList } = this.props;
    let uId = match.params.id;
    uId = parseInt(uId);
    console.log('uId',uId)
    var the = this;
    let user  = usersList.data.filter(function (e) {
      // console.log(e)
        return e.id === uId;
    });
    user = user[0];
    this.setState({dob: new Date(user.dob), images: user.images })
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
    this.props.actionUpdateUser(formData);
  }

  getSelectedOpt=(val, data)=>{
    for (let hobbie of data){
        if(val === hobbie) return true
    }
  }

  render() {
    const {dob, images} = this.state;
    const {updateUser, updateUserSucc, match, usersList } = this.props;
    let uId = match.params.id;
    uId = parseInt(uId);
    console.log('uId',uId)
    var the = this;
    let user  = usersList.data.filter(function (e) {
      // console.log(e)
        return e.id === uId;
    });
    user = user[0];
    console.log('user',user.name)



    return (
      <div>
       <div className="container">
        <h2>Update User</h2>    
        <Formik
           initialValues={{ name: user.name, gender: user.gender , hobbie: user.hobbies}}
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
                  value={values.name}
                />
              </div>
              {errors.name && touched.name ? <p>{errors.name} </p> : null}
              
              <div className="form-group">
                <label for="gender">Gender:</label>
                <select name="gender"  onChange={handleChange} className="form-control" style={{height:"40px"}}  id="gender" value={values.gender} >
                  <option>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
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
              <select name="hobbie" id="hobbie" onChange={handleChange}  multiple>
                <option value="Reading" selected={this.getSelectedOpt('Reading',values.hobbie)}>Reading</option>
                <option value="Playing" selected={this.getSelectedOpt('Playing',values.hobbie)}>Playing</option>
                <option value="Trevling" selected={this.getSelectedOpt('Trevling',values.hobbie)}>Trevling</option>
                <option value="Dancing" selected={this.getSelectedOpt('Dancing',values.hobbie)}>Dancing</option>
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
          {updateUser ? <p>Updating</p> : null}
            {updateUserSucc ? <p>{updateUserSucc.message}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.common });

const mapDispatchToProps = dispatch => ({
    actionUpdateUser: (body) => dispatch(actionUpdateUser(body))
});


export default connect(mapStateToProps, mapDispatchToProps)(Register);
