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
      <form onSubmit={this.handleSubmit} className="nl-form" >
        <label>
          What are are you trying to create: 
          <select value={this.state.value.question1} onChange={this.handleChange}>
            <option value="grapefruit">  my event</option>
            <option value="lime"> tooltip</option>
            <option value="coconut"> class name change</option>
            <option value="mango"> sort</option>
          </select>
      </label>
       <br />
        <label> What type of tooltip are you trying to create? 
          <select value={this.state.value.question2} onChange={this.handleChange}>
            <option value="tooltip">type</option>
            <option value="change-class">popup</option>
            <option value="drop-down">dropdown</option>
          </select>
        </label>
       <br />
        <label> How would you like it to be triggered on:
        	<select value={this.state.value.question3} onChange={this.handleChange}>
						<option value="on" > trigger type</option>
						<option value="hover">hover</option>
						<option value="click">click</option>
						<option value="scroll">click toggle</option>
            <option value="scroll">scroll</option>
					</select>
        </label>
      <br />
        <label>
          What is your TRIGGER ID or Class: 
          <input type="text" value={this.state.text}/>
      </label>
        <br />
      
        <label>
          What is your TARGET ID or Class: 
          <input type="text" value={this.state.text}/>
      </label>
        <br />
        <label> How would you like to make is disapear:
        	<select value={this.state.value.question3} onChange={this.handleChange}>
						<option value="on" > options</option>
						<option value="hover">opacity</option>
						<option value="click">dislay: none</option>
					</select>
        </label>
        <br />
        <label> What Display value would you like to use?
        	<select value={this.state.value.question3} onChange={this.handleChange}>
						<option value="on" > options</option>
						<option value="hover">block</option>
						<option value="click">inline</option>
            <option value="hover">inline-block</option>
						<option value="click">flex</option>
					</select>
        </label>
        <br />
        <label> Starting and ending(optional) value for Scroll ? <br />
          <span>Starting value: <input type="text" value={this.state.text}/></span> <br />
          <span>Ending value (optional): <input type="text" value={this.state.text}/></span>
        </label>
        <br />
         <button className="nl-submit" type="submit">submit</button>
      </form>
    );
  }
}



export default App;
