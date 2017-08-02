import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       < TodoForm /> 
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
            <div className="display"> 
                <a className="toggle" onClick={this.show}>  {this.state.type}  </a>
                  <ul>
                    <li style={this.state.display ? displayBlock : displayNone}>
                      <input type="text" onChange={this.handleChange} Value={this.state.type}/>
                      <button onClick={this.show}>next</button>
                    </li>
                  </ul>
            </div>
            <span className="input-group-btn">
								<button type="submit" value="Submit" className="btn btn-primary">DONE
									</button>
							</span>
			  	</div>
      </form>
    );
  }
}


export default App;
