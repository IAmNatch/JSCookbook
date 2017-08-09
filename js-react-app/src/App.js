import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> FORM THAT LOGS TO THE CONSOLE</h1>
       <FlavorForm />
      </div>
    );
  }
}

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
     var newArray = this.state.value.slice();
    newArray.push(event.target.value);
    this.setState({value : newArray})
  }

  handleSubmit(event) {
   console.log('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="nl-form">
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value.question1} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
      </label>
       <br />
        <label> What would you like to do?
          <select value={this.state.value.question2} onChange={this.handleChange}>
            <option value="tooltip">tooltip</option>
            <option value="change-class">change class</option>
            <option value="drop-down">drop down</option>
          </select>
        </label>
       <br />
        <label> That is activated:
        	<select value={this.state.value.question3} onChange={this.handleChange}>
						<option value="on" >on</option>
						<option value="hover">Hover</option>
						<option value="click">Click</option>
						<option value="scroll">Scroll</option>
					</select>
        </label>
      <br />
        <label>
          Pick your favorite color:  
          <select value={this.state.value.question4} onChange={this.handleChange}>
            <option value="yellow"> yellow</option>
            <option value="green">green</option>
            <option value="white">white</option>
            <option value="orange">orange</option>
          </select>
      </label>
        <br />
         <button className="nl-submit" type="submit">submit</button>
      </form>
    );
  }
}



export default App;
