import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Workout from './component/Workout';
import Home from './component/Home';
import Header from './component/Header';
import Recipes from './Recipes';
import Exercise from './component/Exercises'
import Youtube from './component/youtube'

class App extends Component {
  
  state ={
  exercises:[]
  }

  render() { 
    //console.log(this.state)
    return (
      <div>
      <Header/>
     <Switch>
     <Route exact path='/' component={(props) =>   <Home {...props} /> }></Route>
     <Route exact path='/Workout' component={(props) =>   <Workout {...props} exercises={this.state.exercises}/> }></Route>
     <Route exact path='/recipes' component={(props) =>   <Recipes {...props}></Recipes> }></Route>
     <Route exact path='/exercises/:exerciseName' component={(props) =>   <Exercise {...props}/> }/>
     <Route exact path='/videos' component={(props) =>   <Youtube {...props}/> }/>
     {/* <Route exact path='/recipesdetails' component={(props) =>   <recipeDetails {...props}></recipeDetails> }></Route> */}
      </Switch>
      </div>
    );
  }
}

export default App;
