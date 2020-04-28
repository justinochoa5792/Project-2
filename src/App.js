import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Workout from './component/Workout';
import Home from './component/Home';
import Header from './component/Header';
import Video from './component/Video';
import axios from 'axios';
import MasonryPage from './component/Masonry';


class App extends Component {

 state={
   exercises:[]
} 

componentDidMount=()=>{
  axios.get("https://wger.de/api/v2/exercisecategory/")
  .then(response=>{
    this.setState({exercises:response.data.results})})
}



render() { 
  console.log(this.state)
  return (
    <div>
      <header><h1>Iron Workouts</h1></header>
      <Header/>
     <Switch>
     <Route exact path='/' component={(props) =>   <Home {...props} /> }></Route>
     <Route exact path='/Workout' component={(props) =>   <Workout {...props} exercises={this.state.exercises}/> }></Route>
     <Route exact path='/Video' component={(props) =>   <Video {...props} /> }></Route>
     <Route exact path='/Masonry' component={(props) =>   <MasonryPage {...props}></MasonryPage> }></Route>
    
      </Switch>
      </div>
    );
  }
}

export default App;

// ,{headers:{Authorization: "Token 58b9516311656fda4bb31326773e5b1e8b24ada3"}}
//  this.setState({exercises:response.data})
//     })
//   }
//     showExercises = () => {
//    return this.state.exercises.map(eachExercise => {
//           return (
//                   <h4>{eachExercise}</h4>
//           )
//       })