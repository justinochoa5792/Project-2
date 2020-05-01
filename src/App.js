import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Workout from './component/Workout';
import Home from './component/Home';
import Header from './component/Header';
import MasonryPage from './component/Masonry';
import Callback from './component/Callback';
import Recipes from './Recipes';
import Exercise from './component/Exercises'

class App extends Component {
  
  state ={
  recipe:[]
  }
  
  // componentDidMount=()=>{
  //   Axios.get(`https://api.edamam.com/search?q=chicken&app_id=c2f8a963&app_key=50a9c5d1f171508f80243bee7cd4734c`)
  //   .then(response=>{ console.log(response)
  //     this.setState({recipe:response.data.hits})})
  // }

  render() { 
    //console.log(this.state)
    return (
      <div>
      <header><h1>Iron Workouts</h1></header>
      <Header/>
     <Switch>
     <Route exact path='/' component={(props) =>   <Home {...props} /> }></Route>
     <Route exact path='/Workout' component={(props) =>   <Workout {...props} exercises={this.state.exercises}/> }></Route>
     <Route exact path='/Masonry' component={(props) =>   <MasonryPage {...props}></MasonryPage> }></Route>
     <Route exact path='/callback' component={(props) =>   <Callback {...props}></Callback> }></Route>
     <Route exact path='/recipes' component={(props) =>   <Recipes {...props}></Recipes> }></Route>
     <Route exact path='/exercises/:exerciseName' component={(props) =>   <Exercise {...props}/> }/>
      </Switch>
      </div>
    );
  }
}

export default App;

// ,{headers:{Authorization: "Token 58b9516311656fda4bb31326773e5b1e8b24ada3"}}
// 'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BQKM&redirect_uri=https%3A%2F%%2Flocalhost%3A3000&scope=activity' 


// var FitbitApiClient = require("fitbit-node")
// let fitBit=new FitbitApiClient({clientId: "22BQKM", clientSecret: "282fcb1503228897400115a624b03211", apiVersion: "1.2"})
// console.log(fitBit)
// fitBit.getAccessToken()