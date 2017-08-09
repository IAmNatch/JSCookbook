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

<<<<<<< HEAD
=======
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

        this.state = {};

        // this.NLForm = this.NLForm.bind(this);
        // this.NLField = this.NLFeild.bind(this);
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
            <div className="main clearfix">
            <form id="nl-form" className="nl-form">
            Do you want to
            <select>
            <option value="1" selected>create </option>
            <option value="2">Tooltip</option>
            <option value="3">Sort</option>
            <option value="4">Change Class</option>
            </select>
            <br /> That is activated
            <select>
            <option value="1" selected>on</option>
            <option value="2">Hover</option>
            <option value="3">Click</option>
            <option value="4">Scroll</option>
            </select>
            <br />at
            <select>
            <option value="1" selected>anytime</option>
            <option value="1">7 p.m.</option>
            <option value="2">8 p.m.</option>
            <option value="3">9 p.m.</option>
            </select>
            in <input type="text" value="" placeholder="any city"/>
            <div className="nl-submit-wrap">
            <button className="nl-submit" type="submit">Find a restaurant</button>
            </div>
            <div className="nl-overlay"></div>
            </form>
            </div>
        );
    }

}

>>>>>>> 1b3087d6a0818b89fb64a7aa8c7e4da629e7ae14

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

         <button className="nl-submit" type="submit">submit</button>
      </form>
    );
  }
}



export default App;
