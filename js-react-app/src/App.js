import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       < TodoForm />
       < Newform />  
       <FlavorForm />
      </div>
    );
  }
}

class TodoForm extends React.Component {
    constructor(){
        super();

        this.state = {
            type: 'type',
            text: '',
            display: false
        };

        this.show = this.show.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); //prevents page from reloading
        //   const todoItem = this.state.text; //assigning my input text to a variable
        // this.props.newTodoItem(todoItem); //passing that new var as a argument in a function and assigning that function to a prop so it can be used by its parents to print that var input to the dom
        console.log('You typed: ' + this.state.type); //console.log to test
        this.setState(function(){ //once the submition happens, clear the form
            return {
                // type: ''
            };
        });
    }

    show(e) {
        console.log(this.state.display);
        this.setState({
            display: !this.state.display
        });
    }

    handleChange(event) {
        this.setState({
            type: event.target.value
        });
    }

    render() {
        var displayNone = {
            display: 'none'

        };
        var displayBlock = {
            display: 'inline-block'

        };

        return (
            <form onSubmit={this.handleSubmit}>
            <div className="input-group">
            what are you trying to do?
            <span className="display">
            <a className="toggle" onClick={this.show}>  {this.state.type}  </a>
            <ul>
            <li style={this.state.display ? displayBlock : displayNone}>
            <input type="text" onChange={this.handleChange} value={this.state.type}/>
            <button onClick={this.show}>next</button>
            </li>
            </ul>
            </span>
            <span className="input-group-btn">
            <button type="submit" value="Submit" className="btn btn-primary">DONE
            </button>
            </span>
            </div>
            </form>
        );
    }
}

class Newform extends Component {
constructor(){
		super();

		this.state = {
     value: ''
      
         }
      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }
   handleChange(event) {
    this.setState( {
        value:  event.target.value});
  }
    handleSubmit(event) {
    console.log('you selected: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      		<div class="main clearfix">
				<form id="nl-form" class="nl-form" onSubmit={this.handleSubmit}>
					Do you want to
        <select value={this.state.value} onChange={this.handleChange}>
						<option value="create" >create </option>
						<option value="tooltip">Tooltip</option>
						<option value="sort">Sort</option>
						<option value="change-class">Change Class</option>
					</select> 
					<br /> That is activated 
					<select>
						<option value="on" >on</option>
						<option value="hover">Hover</option>
						<option value="click">Click</option>
						<option value="scroll">Scroll</option>
					</select>
					<br />at 
					<select>
						<option value="1" selected>anytime</option>
					 	<option value="1">7 p.m.</option>
					 	<option value="2">8 p.m.</option>
					 	<option value="3">9 p.m.</option>
					</select>
					in <input type="text" value="" placeholder="any city"/>
					<div class="nl-submit-wrap">
						<button class="nl-submit" type="submit">Find a restaurant</button>
					</div>
					<div class="nl-overlay"></div>
				</form>
			</div>
    );
  }
}
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [
      ]
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
      <form onSubmit={this.handleSubmit}>
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
        <label> That is activated 
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
            <option value="yellow">yellow</option>
            <option value="green">green</option>
            <option value="white">white</option>
            <option value="orange">orange</option>
          </select>
      </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default App;
