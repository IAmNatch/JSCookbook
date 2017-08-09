import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       < TodoForm />
       < Newform /> 
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
      
		     }
    this.show = this.show.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(event) {
		 event.preventDefault(); //prevents page from reloading
			  const todoItem = this.state.text; //assigning my input text to a variable
		  	// this.props.newTodoItem(todoItem); //passing that new var as a argument in a function and assigning that function to a prop so it can be used by its parents to print that var input to the dom
       console.log('You typed: ' + this.state.type); //console.log to test
	         this.setState(function(){ //once the submition happens, clear the form
		      return {
		       	  // type: ''
	        	  }
         });
     }
    
     show(e) {
     console.log(this.state.display)
       this.setState({
         display: !this.state.display
       })
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
                      <input type="text" onChange={this.handleChange} Value={this.state.type}/>
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

  render() {
    return (
      		<div class="main clearfix">
				<form id="nl-form" class="nl-form">
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
					<div class="nl-submit-wrap">
						<button class="nl-submit" type="submit">Find a restaurant</button>
					</div>
					<div class="nl-overlay"></div>
				</form>
			</div>
    );
  }
}


	

export default App;