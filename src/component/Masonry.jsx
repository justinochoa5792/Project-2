import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {Link} from 'react-router-dom'

const CardExample = (props) => {
    console.log(props)
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>
            A quick breakdown of muscle groups and there corresponding workouts.
          </MDBCardText>
          {/* <Link to={props.name}><MDBBtn href="">Enter</MDBBtn></Link> */}
          <MDBBtn href="">Enter</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;