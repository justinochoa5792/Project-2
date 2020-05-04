import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Masonry'

class Home extends Component {
    render() {
        return (
            <div>
            <ul>
               <li><Link to='/Workout'><Card name="Workouts" 
               message=" A quick breakdown of muscle groups and there corresponding workouts." 
               /></Link></li> 
               <li><Link to='/recipes'><Card name="Recipes"
                   message= "Recipes for all lifestyles."
                   /></Link></li>
               <li><Link to='/videos'><Card name="Videos"
                   message="Informative videos for various lifts " /></Link></li>
            </ul>
                
            </div>
        );
    }
}

export default Home;