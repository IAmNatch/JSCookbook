import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
      </div>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <div className="hello">
        <div className="title-logo">
          <div className="title">
       <h1> <span className="front-page-header"><i>JavaScript </i></span><br /><span className="header-title">  COOKBOOK</span></h1>
       <p>Easily add custom JavaScript and Jquery recipies to your website, without the bulk and documentation. Create custom recipies for any project. </p>
         </div>
       <div className="cookbook-holder">
         <div className="book">
       <img src="cookbook.svg" />
       </div>
       {/* <div className="gloves">
       <img src="cooking-gloves.svg" />
       </div> */}
       </div>

       <button> Home </button>
       <button> Tutorial</button>

       </div>
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
        formValues: {}
    }

}

handleChange(event) {
  event.preventDefault();
  let formValues = this.state.formValues;
  let name = event.target.name;
  let value = event.target.value;

  formValues[name] = value;
  
  this.setState({formValues})
  console.log(this.state.formValues["event-type"] )
}


  render() {
    return (
      <div className="App">
    <form className="nl-form">
          <label>
          What are are you trying to create: 
          <select  name="event-type" value={this.state.formValues["event-type"]} onChange={this.handleChange.bind(this)}>
            <option value="do-not-submit">  my event</option>
            <option value="tooltip"> tooltip</option>
            <option value="change-class-name"> change class name</option>
            <option value="sort"> sort</option>
          </select>
      </label>
      </form>
      {this.state.formValues["event-type"] === 'tooltip' ? <Tooltip /> : <div></div>}
      {this.state.formValues["event-type"] === 'change-class-name' ? <ChangeClass/> : <div></div>}
      </div>
    );
  }
}

class ChangeClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
        formValues: {}
    }

}

handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;
  
    formValues[name] = value;
    
    this.setState({formValues})
    console.log(this.state.formValues["event-type"] )
}

handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.formValues);
}

render(){
  return (
    <form onSubmit={this.handleSubmit.bind(this)} className="nl-form">
        <label>
        What are are you trying to create: 
        </label>
      <br />
      <button className="nl-submit" type="submit">submit</button>
       </form>
  )
}
}

class Tooltip extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          formValues: {}
      }

  }

  handleChange(event) {
      event.preventDefault();
      let formValues = this.state.formValues;
      let name = event.target.name;
      let value = event.target.value;
    
      formValues[name] = value;
      
      this.setState({formValues})
      console.log(this.state.formValues["event-type"] )
  }
  
  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.formValues);
  }
  
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="nl-form">
          <label>
          What are are you trying to create: 
          <select  name="event-type" value={this.state.formValues["event-type"]} onChange={this.handleChange.bind(this)}>
            <option value="do-not-submit">  my event</option>
            <option value="tooltip"> tooltip</option>
            <option value="change-class-name"> change class name</option>
            <option value="sort"> sort</option>
          </select>
      </label>
      <br />
        <label style={{display: this.state.formValues["event-type"] === 'tooltip' ? 'inline-block' : 'none' }}> What type of tooltip are you trying to create? 
          <select name="type"  value={this.state.formValues["type"]} onChange={this.handleChange.bind(this)}>
            <option value="do-not-submit">type</option>
            <option value="popups">popup</option>
            <option value="dropdown">dropdown</option>
          </select>
        </label>
        <br />
        <label style={{display: this.state.formValues["type"] &&  this.state.formValues["event-type"] === 'tooltip'  ? 'inline-block' : 'none' }}> How would you like it to be triggered on:
        	<select name="trigger"  value={this.state.formValues["trigger"]} onChange={this.handleChange.bind(this)}>
						<option value="do-not-submit" > trigger type</option>
						<option value="hover">hover</option>
						<option value="click">click</option>
						<option value="click toggle">click toggle</option>
            <option value="scroll">scroll</option>
					</select>
        </label>
      <br />
        <label style={{display: this.state.formValues["trigger"] &&  this.state.formValues["event-type"] === 'tooltip' ? 'inline-block' : 'none' }}>
          What is your TRIGGER ID or Class: 
          <input type="text" name="trigger-id-class"  value={this.state.formValues["trigger-id-class"]} onChange={this.handleChange.bind(this)} />
      </label>
        <br />
      
        <label style={{display: this.state.formValues["trigger-id-class"] &&  this.state.formValues["event-type"] === 'tooltip'? 'inline-block' : 'none' }}>
          What is your TARGET ID or Class: 
          <input type="text" name="target-id-class" value={this.state.formValues["target-id-class"]} onChange={this.handleChange.bind(this)} />
      </label>
      <br />
        <label style={{display: this.state.formValues["target-id-class"] &&  this.state.formValues["event-type"] === 'tooltip'  && this.state.formValues["type"] != 'dropdown' ? 'inline-block' : 'none' }}> How would you like to make is disapear:
        	<select name="disapaer" value={this.state.formValues["disapaer"]} onChange={this.handleChange.bind(this)}>
			
    			<option value="do-not-submit" > options</option>
						<option value="opacity">opacity</option>
						<option value="dislay: none">dislay: none</option>
					</select>
        </label>
        <br />
        <label style={{display: this.state.formValues["disapaer"] &&  this.state.formValues["event-type"] === 'tooltip'  && this.state.formValues["type"] != 'dropdown'  ? 'inline-block' : 'none' }}>  What Display value would you like to use?
        	<select name="disapaer-value" value={this.state.formValues["disapaer-value"]} onChange={this.handleChange.bind(this)}>
						<option value="do-not-submit" > options</option>
						<option value="block">block</option>
						<option value="inline">inline</option>
            <option value="inline-block">inline-block</option>
						<option value="flex">flex</option>
					</select>
        </label>
        <br />
        <label style={{display:  this.state.formValues["disapaer-value"]  &&  this.state.formValues["event-type"]  === 'tooltip'  && this.state.formValues["type"] != 'dropdown'  ? 'inline-block' : 'none' }}> Starting and ending(optional) value for Scroll ? <br />
          <span>Starting value: <input type="text" name="scroll-start"  value={this.state.formValues["scroll-start"]} onChange={this.handleChange.bind(this)} /></span> <br />
          <span>Ending value (optional): <input type="text" name="scroll-end"  value={this.state.formValues["scroll-end"]} onChange={this.handleChange.bind(this)} /></span>
        </label>
        <br />
        <button style={{display:  (this.state.formValues["target-id-class"] && this.state.formValues["type"] == 'dropdown') || this.state.formValues["scroll-start"] ? 'inline-block' : 'none' }} className="nl-submit" type="submit">submit</button>
         </form>
    )
  }
}

export default App;
