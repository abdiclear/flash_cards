import React, { Component } from 'react';
import './App.css';
import QuizBar from './components/QuizBar';
import FlashCard from './components/FlashCard';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cardStyle: "random",
      ready: false
    }
  }

  userChoice = (cardStyle) => {
    this.setState({
      cardStyle: cardStyle,
      ready: false
    })
  }

  isReady = ()=>{
    this.setState({
      ready: true
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <QuizBar userChoice={this.userChoice} currentStyle={this.state.cardStyle}/>
          <FlashCard cardStyle={this.state.cardStyle} isReady={this.isReady} readyState={this.state.ready}/>
        </div>
      </div>
    );
  }


}

export default App;
