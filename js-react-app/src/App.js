import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1> FORM THAT LOGS TO THE CONSOLE</h1>
       <Test />
      </div>
    );
  }
}

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         type: '',
//         tooltip: ''

//     };

//     // this.handleChangeType = this.handleChangeType.bind(this);
//     this.handleChangeTooltip = this.handleChangeTooltip.bind(this);
//     // this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   // handleChangeType(event) {
//   //   // this.setState({value: event.target.value});
//   //   //  var newArray = this.state.value.type.slice();
//   //   // newArray.push(event.target.value);
//   //   this.setState({
//   //         type:  event.target.type
//   //   })
//   // }
//   // handleChangeTooltip(event){
//   //   this.setState({

//   //         tooltip: event.target.tooltip

//   //   })
//   // }
//   handleChangeTooltip(event){
//     this.setState({

//       tooltip: event.target.tooltip

//     })
//   }

//   handleSubmit(event) {
//    console.log(JSON.stringify(this.state));
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="nl-form" >
//         <label>
//           What are are you trying to create:
//           <select value={this.state.type} onChange={this.handleChange}>
//             <option value="do-not-submit">  my event</option>
//             <option value="tooltip"> tooltip</option>
//             <option value="change-class-name"> change class name</option>
//             <option value="sort"> sort</option>
//           </select>
//       </label>
//        <br />
//         <label> What type of tooltip are you trying to create?
//           <select value={this.state.tooltip} onChange={this.handleChangeTooltip}>
//             <option value="do-not-submit">type</option>
//             <option value="popups">popup</option>
//             <option value="dropdown">dropdown</option>
//           </select>
//         </label>
//        <br />
//         <label> How would you like it to be triggered on:
//         	<select value={this.state.value} onChange={this.handleChange}>
// 						<option value="do-not-submit" > trigger type</option>
// 						<option value="hover">hover</option>
// 						<option value="click">click</option>
// 						<option value="click toggle">click toggle</option>
//             <option value="scroll">scroll</option>
// 					</select>
//         </label>
//       <br />
//         <label>
//           What is your TRIGGER ID or Class:
//           <input type="text" value={this.state.text} required/>
//       </label>
//         <br />

//         <label>
//           What is your TARGET ID or Class:
//           <input type="text" value={this.state.text} required/>
//       </label>
//         <br />
//         <label> How would you like to make is disapear:
//         	<select value={this.state.value} onChange={this.handleChange}>
// 						<option value="do-not-submit" > options</option>
// 						<option value="opacity">opacity</option>
// 						<option value="dislay: none">dislay: none</option>
// 					</select>
//         </label>
//         <br />
//         <label> What Display value would you like to use?
//         	<select value={this.state.value} onChange={this.handleChange}>
// 						<option value="do-not-submit" > options</option>
// 						<option value="block">block</option>
// 						<option value="inline">inline</option>
//             <option value="inline-block">inline-block</option>
// 						<option value="flex">flex</option>
// 					</select>
//         </label>
//         <br />
//         <label> Starting and ending(optional) value for Scroll ? <br />
//           <span>Starting value: <input type="text" value={this.state.text} required/></span> <br />
//           <span>Ending value (optional): <input type="text" value={this.state.text}/></span>
//         </label>
//         <br />
//          <button className="nl-submit" type="submit">submit</button>
//       </form>
//     );
//   }
// }


class Test extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          formValues: {}
      }

      seeSomething: false;
  }

  handleChange(event) {
      event.preventDefault();
      let formValues = this.state.formValues;
      let name = event.target.name;
      let value = event.target.value;

      formValues[name] = value;

      this.setState({formValues})
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
        <label style={{display: this.state.formValues["event-type"] ? 'inline-block' : 'none' }}> What type of tooltip are you trying to create?
          <select name="type"  value={this.state.formValues["type"]} onChange={this.handleChange.bind(this)}>
            <option value="do-not-submit">type</option>
            <option value="popups">popup</option>
            <option value="dropdown">dropdown</option>
          </select>
        </label>
        <br />
        <label style={{display: this.state.formValues["type"]  ? 'inline-block' : 'none' }}> How would you like it to be triggered on:
        	<select name="trigger"  value={this.state.formValues["trigger"]} onChange={this.handleChange.bind(this)}>
						<option value="do-not-submit" > trigger type</option>
						<option value="hover">hover</option>
						<option value="click">click</option>
						<option value="click toggle">click toggle</option>
            <option value="scroll">scroll</option>
					</select>
        </label>
      <br />
        <label style={{display: this.state.formValues["trigger"] ? 'inline-block' : 'none' }}>
          What is your TRIGGER ID or Class:
          <input type="text" name="trigger-id-class"  value={this.state.formValues["trigger-id-class"]} onChange={this.handleChange.bind(this)} />
      </label>
        <br />

        <label style={{display: this.state.formValues["trigger-id-class"] ? 'inline-block' : 'none' }}>
          What is your TARGET ID or Class:
          <input type="text" name="target-id-class" value={this.state.formValues["target-id-class"]} onChange={this.handleChange.bind(this)} />
      </label>
      <br />
        <label style={{display: this.state.formValues["target-id-class"] ? 'inline-block' : 'none' }}> How would you like to make is disapear:
        	<select name="disapaer" value={this.state.formValues["disapaer"]} onChange={this.handleChange.bind(this)}>
						<option value="do-not-submit" > options</option>
						<option value="opacity">opacity</option>
						<option value="dislay: none">dislay: none</option>
					</select>
        </label>
        <br />
        <label style={{display: this.state.formValues["disapaer"] ? 'inline-block' : 'none' }}>  What Display value would you like to use?
        	<select name="disapaer-value" value={this.state.formValues["disapaer-value"]} onChange={this.handleChange.bind(this)}>
						<option value="do-not-submit" > options</option>
						<option value="block">block</option>
						<option value="inline">inline</option>
            <option value="inline-block">inline-block</option>
						<option value="flex">flex</option>
					</select>
        </label>
        <br />
        <label style={{display:  this.state.formValues["disapaer-value"] ? 'inline-block' : 'none' }}> Starting and ending(optional) value for Scroll ? <br />
          <span>Starting value: <input type="text" name="scroll-start"  value={this.state.formValues["scroll-start"]} onChange={this.handleChange.bind(this)} required/></span> <br />
          <span>Ending value (optional): <input type="text" name="scroll-end"  value={this.state.formValues["scroll-end"]} onChange={this.handleChange.bind(this)} /></span>
        </label>
        <br />
        <button style={{display:  this.state.formValues["scroll-start"] ? 'inline-block' : 'none' }} className="nl-submit" type="submit">submit</button>
         </form>
    )
  }
}



export default App;
