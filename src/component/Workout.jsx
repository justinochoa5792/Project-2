import React, { Component } from 'react';
import Card from './Masonry'
import Exercises from '../data.json'
import {Link} from 'react-router-dom'

class Workout extends Component {
    
    showExercises = () => {
    let muscleArr= Object.keys(Exercises)
    
        return muscleArr.map((eachExercise,i) => {
          return (
              <Link key={i} to ={`/exercises/${eachExercise}`}><Card  name={eachExercise}/></Link>
          )
        })
    }

    
    render() {
        return (
            <div>
                Workout
             {this.showExercises()} 

            </div>
        );
    }
}

export default Workout;