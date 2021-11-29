import React, { useState, useMemo } from 'react'
import Select from 'react-select'  
import { Formik } from 'formik';
import countryList from 'react-select-country-list' 
import * as Yup from 'yup';  

     
const SignupSchema = Yup.object().shape({
     
     firstName: Yup.string() 
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'), 
    number: Yup.number()
    .required('Required')
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point"),
  });   
  
const Form = ({showForm ,  setShowForm }) => {
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  } 
 return  (<div className={`form-component ${showForm?"open":''}`}> 
     <i class="fas fa-times fa-lg"  onClick={()=>setShowForm(true)}> 
     </i>
     < h5>Thank you so much for taking the time! </h5> 
    <p>please provide below details</p>
  <Formik 
    initialValues={{ email:'',  firstname:" " , lastname :" "  ,  Address:" " ,  textarea:''   , code :" " , number :" " }}
    validationSchema={SignupSchema} 
    onSubmit={(values, { setSubmitting }) => {
    
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
    
  }) => ( <form className='from' onSubmit={handleSubmit}>
        <label>First name:</label> {console.log(errors)}
        <input
      type="text"
      name="firstname"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.firstname}
      placeholder="john" 
          />  
    <p className="">{errors.firstName && touched.firstName && errors.firstName}  </p> 
        <label>Last name:</label>
         <input
      type="text"
      name="lastname"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.lastname}
      placeholder="smilga"
    />  
   <p className ="error" > {errors.lastname && touched.lastname && errors.lastname} </p>
        <label>Address: </label>
        <textarea placeholder='enter you full address postal'></textarea>  
        <label>Country:</label>
        <div className='list'><Select options={options} value={value} onChange={changeHandler} /></div >  
        <label>Email id:</label>
        <input
      type="email" 

      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      placeholder="john@12.com"
    />  
    <p className ="error" >{errors.email && touched.email && errors.email} </p>
        <label>Phone Number:</label>
        <div> 
        <div > 
        <input
      type="number"
      name="code" 
      id= "code"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.code}
      placeholder=" +91  "
    /> 
          <input
      type="cell"
      name="number" 
      id="no"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.number}
      placeholder="1234567"
    />   
     <p className ="error" >{errors.number && touched.number && errors.number} </p>
        </div>
        </div>
        <button type="submit" disabled={isSubmitting}>
      Submit
    </button>
        </form>
        
    )}
        </Formik>
        </div> )
}
export default Form;