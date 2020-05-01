import React, { Component } from 'react';
import exercises from '../data.json'
import {Link} from 'react-router-dom';
class Exercises extends Component {
    componentDidMount = () => {
        this.setState({
            muscle: this.props.match.params.exerciseName
        })
    }
    show = () => {
        let muscle = this.props.match.params.exerciseName
        let newArr = exercises[muscle].map(eachExer => {
                    return (<h1 key={eachExer}>{eachExer}</h1>)
                })
                return newArr
    }
    render() {
        //let muscle = this.props.match.params.exerciseName
        console.log(this.props.match)
        return (
            <div>
                <Link to= '/workout'>Back</Link>   
                {this.show()}
            </div>
        );
    }
}

export default Exercises;