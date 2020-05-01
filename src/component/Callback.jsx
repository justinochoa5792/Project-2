import React, { Component } from "react";
import Axios from "axios";

const { Api, SCOPES } = require("fitbit-api-handler");
const api = new Api("22BQKM", "282fcb1503228897400115a624b03211");
console.log(
  api.getLoginUrl("http://localhost:3000/callback", [
    SCOPES.ACTIVITY,
    SCOPES.PROFILE,
    SCOPES.NUTRITION,
  ])
);

class Callback extends Component {
  async componentDidMount() {
    console.log(this.props.location.search);
    let code = this.props.location.search.replace("?code=", "");
    console.log(code);
    const token = await api.requestAccessToken(
      code,
      "http://localhost:3000/callback"
    );
    const config = {
        headers: { Authorization: `Bearer ${token.access_token}` }
    };
    console.log(token);
    api.setAccessToken(token.access_token);
    let response= await Axios.get("https://api.fitbit.com/1/user/-/activities/steps/date/2019-01-01/2020-01-01.json",config).catch(error=>console.log(error))
    console.log(response)
}
       
  render() {
    return <div>Callback</div>;
  }
}

export default Callback;
