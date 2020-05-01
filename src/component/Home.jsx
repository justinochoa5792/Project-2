import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Masonry'

class Home extends Component {
    render() {
        return (
            <div>
            <ul>
               <li><Link to='/Workout'>Workouts<Card/></Link></li> 
               <li><Link to='/recipes'>recipes<Card/></Link></li>
            </ul>
                
            </div>
        );
    }
}

export default Home;