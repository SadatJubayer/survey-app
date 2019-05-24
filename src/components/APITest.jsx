import React, { Component } from "react";
import axios from "axios";

class APITest extends Component {
  componentDidMount() {
    var url = "https://quereia.serveo.net/api/token";
    axios({
      method: "get",
      url: url,
      auth: {
        username: "boxxx",
        password: "boxxx"
      }
    })
      .then(function(response) {
        console.log("Authenticated");
        console.log(response);
        // const token = response.data.data.token;
        // console.log("here is the token", token);
      })
      .catch(function(error) {
        console.log("Error on Authentication");
      });
  }

  state = {
    user: {
      username: "boxxx",
      password: "boxxx"
    }
  };
  render() {
    return <div>I am from api</div>;
  }
}

export default APITest;
