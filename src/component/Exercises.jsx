import React, { Component } from 'react';
import exercises from '../data.json'
import {Link} from 'react-router-dom';
class Exercises extends Component {
    componentDidMount = () => {
        this.setState({
            muscle: this.props.match.params.exerciseName
        })
    }
    // Map is like a for loop it iterates through the list. This is creating a new a array.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    
    show = () => {
        let muscle = this.props.match.params.exerciseName
        let newArr = exercises[muscle].map(eachExer => {
                    return (<h2 key={eachExer}>{eachExer}</h2>)
                })
                return newArr
    }
    render() {
        //let muscle = this.props.match.params.exerciseName
        console.log(this.props.match)
        return (
            <div>
                <Link to= '/workout'><h3>Back</h3></Link>   
                {this.show()}
            </div>
        );
    }
}

export default Exercises;