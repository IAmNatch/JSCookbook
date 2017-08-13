// How to make unique form elements


//Actual Form Design
<form>
    <input type="q1text" onChange={this.valueToState()}></input>
    <input type="q2text" onChange={this.valueToState()}></input>
    <input type="q3text" onChange={this.valueToState()}></input>

    <select type="q4Dropdown" onChange={this.valuetoState()}>
        <option value="do-not-submit">  my event</option>
        <option value="tooltip"> tooltip</option>
        <option value="change-class-name"> change class name</option>
        <option value="sort"> sort</option>
    </select>
</form>


//local component function
function valuetoState (e) {
    type = this.type // Syntax might be wrong here, and this. may need to be passed into function. Can test if needed.
    value = e.text // this might be the wrong syntax for inputting text. I can confirm. 
    console.log(type); // << Should return q4Dropdown
    this.props.vToState(type, value);
}

//Top level function
function vToState(type, value) {
    this.setState({type: value});
}
