import React, { Component } from "react";
import Card from "./Masonry";
import Exercises from "../data.json";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class Workout extends Component {
  showExercises = () => {
    let muscleArr = Object.keys(Exercises);

    return muscleArr.map((eachExercise, i) => {
      return (
        <Link key={i} to={`/exercises/${eachExercise}`}>
          <Card name={eachExercise} image="./images/download-1.jpg" />
        </Link>
      );
    });
  };
  gridExamplesPage = () => {
    let muscleArr = Object.keys(Exercises);
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[0]}`}>
              <Card name={muscleArr[0]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[1]}`}>
              <Card name={muscleArr[1]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[2]}`}>
              <Card name={muscleArr[2]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
        </MDBRow>
        {/* ^^this one is row 1^^*/}

        <MDBRow>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[3]}`}>
              <Card name={muscleArr[3]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[4]}`}>
              <Card name={muscleArr[4]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[5]}`}>
              <Card name={muscleArr[5]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
        </MDBRow>
        {/* ^^this one is row 2^^ */}

        <MDBRow>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[6]}`}>
              <Card name={muscleArr[6]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[7]}`}>
              <Card name={muscleArr[7]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[8]}`}>
              <Card name={muscleArr[8]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
        </MDBRow>
        {/* ^^ this one is row 3 ^^ */}

        <MDBRow>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[9]}`}>
              <Card name={muscleArr[9]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
          <MDBCol>
            <Link to={`/exercises/${muscleArr[10]}`}>
              <Card name={muscleArr[10]} image="./images/download-1.jpg" />
            </Link>
          </MDBCol>
        </MDBRow>
        {/* ^^this one is row 3^^ */}
      </MDBContainer>
    );
  };

  render() {
    return (
      <MDBContainer>
        <h3 style={{ color: "white" }}>Workout</h3>
        {this.gridExamplesPage()}
      </MDBContainer>
    );
  }
}

export default Workout;
