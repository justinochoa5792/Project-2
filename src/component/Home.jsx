import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Masonry'

class Home extends Component {
    render() {
        return (
            <div>
            <ul>
               <li><Link to='/Workout'><h3>Workouts</h3><Card/></Link></li> 
               <li><Link to='/recipes'><h3>Recipes</h3><Card/></Link></li>
               <li><Link to='/videos'><h3>Videos</h3><Card/></Link></li>
            </ul>
                
            </div>
        );
    }
}

export default Home;