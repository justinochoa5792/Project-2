import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {
    console.log(props)
  return (
    <MDBCol>
      <MDBCard style={{backgroundColor:'white', width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={props.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>
           {props.message}
          </MDBCardText>
          {/* <Link to={props.name}><MDBBtn href="">Enter</MDBBtn></Link> */}
          <MDBBtn href="">Enter</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;
// https://mdbootstrap.com/img/Photos/Others/images/43.jpg