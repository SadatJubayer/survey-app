import React, { Component } from "react"; //  imrc rcc

const firebase = require("firebase/app");
const uuid = require("uuid");

const firebaseConfig = {
  apiKey: "AIzaSyDbj1rdYgr1PL85vegM2EMfOFyKLCTNyZ8",
  authDomain: "survey-app-e4884.firebaseapp.com",
  databaseURL: "https://survey-app-e4884.firebaseio.com",
  projectId: "survey-app-e4884",
  storageBucket: "survey-app-e4884.appspot.com",
  messagingSenderId: "353963370213",
  appId: "1:353963370213:web:31bab8845998e029"
};

class Survey extends Component {
  onSubmit = event => {
    event.preventDefault();
    if (this.state.userName !== "") {
      this.setState({ gotUsername: true });
    } else {
      console.log("User name not entered");
    }
    console.log(this.state);
  };
  answerSelected = event => {
    var answers = this.state.answers;
    console.log(event.target.value);

    if (event.target.name === "answer1") {
      answers.answer1 = event.target.value;
    } else if (event.target.name === "answer2") {
      answers.answer2 = event.target.value;
    } else if (event.target.name === "answer3") {
      answers.answer3 = event.target.value;
    }
    this.setState({ answers }, () => {
      console.log(this.state);
    });
  };

  onFromSubmit = event => {
    event.preventDefault();
  };

  constructor(props) {
    super(props);

    this.input = React.createRef();

    this.state = {
      userName: "",
      uid: uuid.v1(),
      answers: {
        answer1: "",
        answer2: "",
        answer3: ""
      },
      gotUsername: false,
      isSubmitted: false
    };
  }
  onInputChange = e => {
    this.setState({
      userName: e.target.value
    });
  };

  render() {
    let userName;
    let questions;

    if (this.state.gotUsername === false && this.state.isSubmitted === false) {
      userName = (
        <div>
          <h1> Hey there, please input your name </h1>
          <form onSubmit={this.onSubmit}>
            <input
              className='namy'
              type='text'
              placeholder='Enter your name'
              value={this.state.userName}
              onChange={this.onInputChange}
            />
          </form>
        </div>
      );
      questions = "";
    } else if (this.state.gotUsername && this.state.isSubmitted === false) {
      userName = <h1>Hello {this.state.userName}, Welcome here</h1>;
      questions = (
        <div>
          <h2>Please answer the questions</h2>
          <form onSubmit={this.onFromSubmit}>
            <div className='card'>
              <label> Question oneone ? </label>
              <br />
              <input
                type='radio'
                name='answer1'
                value='Tech'
                onChange={this.answerSelected}
              />{" "}
              Tech
              <input
                type='radio'
                name='answer1'
                value='Design'
                onChange={this.answerSelected}
              />{" "}
              Desgin
              <input
                type='radio'
                name='answer1'
                value='Market'
                onChange={this.answerSelected}
              />{" "}
              Market
            </div>
            <input type='submit' className='feedback-button' value='submit' />
          </form>
        </div>
      );
    }
    return (
      <div>
        {userName}
        --------------------------------------
        {questions}
      </div>
    );
  }
}
export default Survey;
