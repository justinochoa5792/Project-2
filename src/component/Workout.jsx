import React, { Component } from 'react';

class Workout extends Component {
    
    showExercises = () => {
        return this.props.exercises.map(eachExercise => {
          return (
              <h2>{eachExercise.name}</h2>
          )
        })
    }
    
    render() {
        return (
            <div>
                Workout
                {this.props.name}
             {this.showExercises()} 
            </div>
        );
    }
}

export default Workout;