import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import img1 from '../img/image.png.png'
import {

    MDBRadio
  }
  from 'mdb-react-ui-kit';
const Form = () => {
  const [formData, setFormData] = useState({
    contactNumber: '',
    countryCode: '+1',
    dob: new Date(),
    placeOfBirth: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dob: date
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
<>
<div className='container mt-5'>
<div className='d-md-flex align-items-center'>
    <div className='col-12 col-sm-6  text-center'>
        <img className='w-75' src={img1} alt="" />
    </div>

    
    <div className='col-12 col-sm-6 mx-5 mt-md-0' >
      <h2 className='mb-5'>Registration Form</h2>
      <form onSubmit={handleSubmit} >

        <div className='mb-3'>
            <label htmlFor="text" className='w-25'>Name</label><input type="text" placeholder='Enter your name' />
        </div>
        <div>
            
          <label className='w-25 mb-3'>Contact Number:</label>
          <select name="countryCode"  value={formData.countryCode} onChange={handleInputChange}>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            {/* Add more country codes as needed */}
          </select>
          <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} />
        </div>
        <div className='mb-3'>
            <label htmlFor="tel" className='w-25'>Otp</label>
            <input type="number" name="" id="" />
        </div>
        <div className='mb-3'>
            <label htmlFor="mail" className='w-25'>E-mail</label>
            <input type="mail" name="" id="" />
        </div>
        <div className='mb-3'>
          <label className='w-25'>Date of Birth:</label>
          <DatePicker selected={formData.dob} onChange={handleDateChange} />
        </div>
        <div className='mb-3'>
          <label className='w-25'>Place of Birth:</label>
          <select name="countryCode"  value={formData.countryCode} onChange={handleInputChange}>
            <option value="+1">Surat</option>
            <option value="+44">Rajkot</option>
            <option value="+44">Ahemdabad</option>
            <option value="+44">Rajkot</option>
            {/* Add more country codes as needed */}
          </select>
        </div>

        
        <div className='d-md-flex ustify-content-start align-items-center mb-4 mb-3'>
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                  </div>
                  <div className='d-flex'>
      <div className='w-50'>  <button type="submit" className='mt-5 w-50 text-light bg-success py-2 fs-5 '>Save</button></div>
      <div className='w-50'><button   type="submit" className='mt-5 w-50 bg-success text-light py-2 fs-5'>Edit</button></div>
      </div>
      </form>
    </div>
    </div>
    </div>

    </>
  );
};

export default Form;
