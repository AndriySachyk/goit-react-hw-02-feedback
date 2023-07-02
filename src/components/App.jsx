import { Component } from "react"


export class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
  
  handleGood = () => 
    this.setState((prevState) => ({
      good: prevState.good + 1
    }))
  
  handleNeutral = () => 
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    }))
  
  handleBad = () => 
    this.setState((prevState) => ({
      bad: prevState.bad + 1
    }))
  
  
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral
  }
  

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback())*100 || 0 )
  }

render() {
    
    return (
      <div>
        <h1>Please leave feedback</h1>
  
        <button type="button" onClick={this.handleGood}>Good</button>
        <button type="button" onClick={this.handleNeutral}>Neutral</button>
        <button type="button" onClick={this.handleBad}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
      </div>
    );
    
  }
};
