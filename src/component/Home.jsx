import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
            <ul>
               <li><Link to='/Workout'>Workouts</Link></li> 
               <li><Link to='/Video'>Video</Link></li>
            </ul>
                
            </div>
        );
    }
}

export default Home;