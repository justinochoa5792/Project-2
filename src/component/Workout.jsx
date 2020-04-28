import React, { Component } from 'react';
import Card from './Masonry'
class Workout extends Component {
    
    showExercises = () => {
        return this.props.exercises.map((eachExercise,i) => {
          return (
              <Card key={i} name={eachExercise.name}/>
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