import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Form from './Form';

export default function Home() {
  return (
    <>  
      <MDBNavbar light bgColor='primary' className='py-3'>
      <MDBContainer fluid>
        <MDBInputGroup tag="form" className='d-flex w-auto mb-3 '>
          {/* <input className='form-control ' placeholder="Type query" aria-label="Search" type='Search' /> */}
          {/* <MDBBtn outline>Search</MDBBtn> */}
        </MDBInputGroup>
      </MDBContainer>
    </MDBNavbar>

    <Form/>
</>

  );
}