import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       < TodoForm />
       < Newform />
       <br />
       <br />
       <br />
       <br />
       <h1> FORM THAT LOGS TO THE CONSOLE</h1>
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
  

    // componentDidMount() {

        // function myFunction ( window ) {
        //
        //     'use strict';
        //
        //     var document = window.document;
        //
        //     if (!String.prototype.trim) {
        //         String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g, '');};
        //     }
        //
        //     function NLForm( el ) {
        //         this.el = el;
        //         this.overlay = this.el.querySelector( '.nl-overlay' );
        //         this.fields = [];
        //         this.fldOpen = -1;
        //         this._init();
        //     }
        //
        //     NLForm.prototype = {
        //         _init : function() {
        //             var self = this;
        //             Array.prototype.slice.call( this.el.querySelectorAll( 'select' ) ).forEach( function( el, i ) {
        //                 self.fldOpen++;
        //                 self.fields.push( new NLField( self, el, 'dropdown', self.fldOpen ) );
        //             } );
        //             Array.prototype.slice.call( this.el.querySelectorAll( 'input' ) ).forEach( function( el, i ) {
        //                 self.fldOpen++;
        //                 self.fields.push( new NLField( self, el, 'input', self.fldOpen ) );
        //             } );
        //             this.overlay.addEventListener( 'click', function(ev) { self._closeFlds(); } );
        //             this.overlay.addEventListener( 'touchstart', function(ev) { self._closeFlds(); } );
        //         },
        //         _closeFlds : function() {
        //             if( this.fldOpen !== -1 ) {
        //                 this.fields[ this.fldOpen ].close();
        //             }
        //         }
        //     }
        //
        //     function NLField( form, el, type, idx ) {
        //         this.form = form;
        //         this.elOriginal = el;
        //         this.pos = idx;
        //         this.type = type;
        //         this._create();
        //         this._initEvents();
        //     }
        //
        //     NLField.prototype = {
        //         _create : function() {
        //             if( this.type === 'dropdown' ) {
        //                 this._createDropDown();
        //             }
        //             else if( this.type === 'input' ) {
        //                 this._createInput();
        //             }
        //         },
        //         _createDropDown : function() {
        //             var self = this;
        //             this.fld = document.createElement( 'div' );
        //             this.fld.className = 'nl-field nl-dd';
        //             this.toggle = document.createElement( 'a' );
        //             this.toggle.innerHTML = this.elOriginal.options[ this.elOriginal.selectedIndex ].innerHTML;
        //             this.toggle.className = 'nl-field-toggle';
        //             this.optionsList = document.createElement( 'ul' );
        //             var ihtml = '';
        //             Array.prototype.slice.call( this.elOriginal.querySelectorAll( 'option' ) ).forEach( function( el, i ) {
        //                 ihtml += self.elOriginal.selectedIndex === i ? '<li class="nl-dd-checked">' + el.innerHTML + '</li>' : '<li>' + el.innerHTML + '</li>';
        //                 // selected index value
        //                 if( self.elOriginal.selectedIndex === i ) {
        //                     self.selectedIdx = i;
        //                 }
        //             } );
        //             this.optionsList.innerHTML = ihtml;
        //             this.fld.appendChild( this.toggle );
        //             this.fld.appendChild( this.optionsList );
        //             this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
        //             this.elOriginal.style.display = 'none';
        //         },
        //         _createInput : function() {
        //             var self = this;
        //             this.fld = document.createElement( 'div' );
        //             this.fld.className = 'nl-field nl-ti-text';
        //             this.toggle = document.createElement( 'a' );
        //             this.toggle.innerHTML = this.elOriginal.getAttribute( 'placeholder' );
        //             this.toggle.className = 'nl-field-toggle';
        //             this.optionsList = document.createElement( 'ul' );
        //             this.getinput = document.createElement( 'input' );
        //             this.getinput.setAttribute( 'type', 'text' );
        //             this.getinput.setAttribute( 'placeholder', this.elOriginal.getAttribute( 'placeholder' ) );
        //             this.getinputWrapper = document.createElement( 'li' );
        //             this.getinputWrapper.className = 'nl-ti-input';
        //             this.inputsubmit = document.createElement( 'button' );
        //             this.inputsubmit.className = 'nl-field-go';
        //             this.inputsubmit.innerHTML = 'Go';
        //             this.getinputWrapper.appendChild( this.getinput );
        //             this.getinputWrapper.appendChild( this.inputsubmit );
        //             this.example = document.createElement( 'li' );
        //             this.example.className = 'nl-ti-example';
        //             this.example.innerHTML = this.elOriginal.getAttribute( 'data-subline' );
        //             this.optionsList.appendChild( this.getinputWrapper );
        //             this.optionsList.appendChild( this.example );
        //             this.fld.appendChild( this.toggle );
        //             this.fld.appendChild( this.optionsList );
        //             this.elOriginal.parentNode.insertBefore( this.fld, this.elOriginal );
        //             this.elOriginal.style.display = 'none';
        //         },
        //         _initEvents : function() {
        //             var self = this;
        //             this.toggle.addEventListener( 'click', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );
        //             this.toggle.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); ev.stopPropagation(); self._open(); } );
        //
        //             if( this.type === 'dropdown' ) {
        //                 var opts = Array.prototype.slice.call( this.optionsList.querySelectorAll( 'li' ) );
        //                 opts.forEach( function( el, i ) {
        //                     el.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
        //                     el.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close( el, opts.indexOf( el ) ); } );
        //                 } );
        //             }
        //             else if( this.type === 'input' ) {
        //                 this.getinput.addEventListener( 'keydown', function( ev ) {
        //                     if ( ev.keyCode == 13 ) {
        //                         self.close();
        //                     }
        //                 } );
        //                 this.inputsubmit.addEventListener( 'click', function( ev ) { ev.preventDefault(); self.close(); } );
        //                 this.inputsubmit.addEventListener( 'touchstart', function( ev ) { ev.preventDefault(); self.close(); } );
        //             }
        //
        //         },
        //         _open : function() {
        //             if( this.open ) {
        //                 return false;
        //             }
        //             this.open = true;
        //             this.form.fldOpen = this.pos;
        //             var self = this;
        //             this.fld.className += ' nl-field-open';
        //         },
        //         close : function( opt, idx ) {
        //             if( !this.open ) {
        //                 return false;
        //             }
        //             this.open = false;
        //             this.form.fldOpen = -1;
        //             this.fld.className = this.fld.className.replace(/\b nl-field-open\b/,'');
        //
        //             if( this.type === 'dropdown' ) {
        //                 if( opt ) {
        //                     // remove class nl-dd-checked from previous option
        //                     var selectedopt = this.optionsList.children[ this.selectedIdx ];
        //                     selectedopt.className = '';
        //                     opt.className = 'nl-dd-checked';
        //                     this.toggle.innerHTML = opt.innerHTML;
        //                     // update selected index value
        //                     this.selectedIdx = idx;
        //                     // update original select element´s value
        //                     this.elOriginal.value = this.elOriginal.children[ this.selectedIdx ].value;
        //                 }
        //             }
        //             else if( this.type === 'input' ) {
        //                 this.getinput.blur();
        //                 this.toggle.innerHTML = this.getinput.value.trim() !== '' ? this.getinput.value : this.getinput.getAttribute( 'placeholder' );
        //                 this.elOriginal.value = this.getinput.value;
        //             }
        //         }
        //     };
        //
        //     // add to global namespace
        //     window.NLForm = NLForm;
        //
        // }
        //
        // // myFunction(window);
    // }

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

        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default App;
