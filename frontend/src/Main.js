import React, { Component } from 'react';
import logo from './logo.svg';
import './css/main.css';

//Gives App the ability to have onpage links
import {Link} from 'react-router';
import {browserHistory} from "react-router";

//Import auth0
import { getAccessToken } from './utils/AuthService';

// Import AntDesign Components
import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'
import Select from 'antd/lib/select'
import Input from 'antd/lib/input'
import Card from 'antd/lib/card'
import message from 'antd/lib/message'
const Option = Select.Option;
//Import Request
var request = require('request');
const FileSaver = require('file-saver');


class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            numberOfForms: 1
        };

        this.newFormClick = this.newFormClick.bind(this);
        this.onCardDelete = this.onCardDelete.bind(this);
        this.clearDocument = this.clearDocument.bind(this);
    }

    newFormClick() {
        let numberOfForms = this.state.numberOfForms;
        let newNumber = numberOfForms + 1;

        this.setState({numberOfForms: newNumber});
        console.log("numberOfForms is now: " + (this.state.numberOfForms + 1) );
    }

    onCardDelete() {
        let oldNumber = this.state.numberOfForms;
        let newNumber = oldNumber - 1;
        this.setState({numberOfForms: newNumber})
    }

    setCurrentFile(e, fileName, file) {
        console.log('I ran!');
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.outputFromApp) {
            let numberForms = Object.keys(this.props.outputFromApp).length
            console.log('there was a change!');
            console.log(numberForms);
            this.setState({'numberOfForms': numberForms})
        }
    }

    clearDocument() {
        this.props.clearDocument();
        this.setState({numberForms: 1})
        console.log('main level cleared');
    }

    componentDidMount() {
        this.props.currentPage('main')
        this.props.dataUpdate();
    }

    render() {
        return(
            <div id='main'>
                <Form ref={(Form) => { this.mainForm = Form; }} onCardDelete={() => {this.onCardDelete()}} updateNumberOfForms={this.updateNumberOfForms} clearDocument={this.clearDocument} currentDocument={this.props.currentDocument} outputFromApp={this.props.outputFromApp} userData={this.props.userData} currentUser={this.props.currentUser} setUserData={this.props.setUserData} docTitle={this.props.docTitle} numberOfForms={this.state.numberOfForms} dataUpdate={this.props.dataUpdate} />
                <NewFormButton newFormClick={() => this.newFormClick()} />
            </div>

        );
    }

}

//Globals
let modalButtons = []

let modalContent = {
    title:
        {
            functionType: 'What feature would you like to use?',
            functionSubType: 'What sub-feauture?',
            triggerType: 'How will we trigger your function?',
            triggerID: 'what is your triggers ID or Class?',
            targetID: 'What is your targets ID or Class',
            triggerParam: 'Where will your scroll start?',
            triggerParamTwo: 'When will your scroll end? (Optional)',
            generalParam: 'What is the name of the class you would like to update?',
            invisType: 'How would you like to make your form invisible?',
            displayType: 'What is your desired display type when the element is visible'
        },
    wQuestion:
        {
            functionType: ['Tooltipping and Custom Dropdowns', 'Add/Remove CSS Classes', 'UpdateText'],
            functionSubType: {tooltip: ['Tooltipping', 'Dropdown'], css: ['Add', 'Remove'], updateText: ['Add'] },
            triggerType: ['Click', 'clickToggle', 'Hover', 'Scroll'],
            invisType: ['Display: None', 'Opacity: 0'],
            displayType: ['Display: Block', 'Display: Inline-Block', 'Display: Inline', 'Display: Flex']
        },
    wAnswer:
        {
            functionType: ['tooltip', 'css', 'updateText'],
            functionSubType: {tooltip: ['tooltip', 'dropdown'], css: ['add', 'remove'], updateText: ['updateText']},
            triggerType: ['click', 'clickToggle', 'hover', 'scroll'],
            invisType: ['display', 'opacity'],
            displayType: ['block', 'inline-block', 'inline', 'flex']
        },
    wDisplayedAnswer:
        {
            functionType: ['create a popop or dropdown', 'css', 'updateText'],
            functionSubType: {tooltip: ['making a popup', 'make a dropdown'], css: ['add CSS', 'remove CSS'], updateText: ['update text']},
            triggerType: ['click', 'clickToggle', 'hover', 'scroll'],
            invisType: ['display', 'opacity'],
            displayType: ['block', 'inline-block', 'inline', 'flex']
        }
};

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            output: {}
        };

        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.fourthQLogic = this.fourthQLogic.bind(this);
        this.submitLogic = this.submitLogic.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearDocument = this.clearDocument.bind(this);
    }

    showModal(e, parent) {
        console.log("showmodal ran!");
        let currentModal = "visible" + parent.dataset.id;
        let currentForm = parent.dataset.id;
        let currentQuestion = e.target.dataset.questiontype;
        console.log(currentQuestion);
        // Button Reset
        modalButtons = []

        // Modal Buttons
        let currentOutput = 's' + parent.dataset.id;

        if (this.state.output[currentOutput] !== undefined) {
            // CSS Case
            if (this.state.output[currentOutput].functionType !== undefined) {
                let currentFunction = this.state.output[currentOutput].functionType;
                if (currentQuestion === 'functionSubType') {
                    for (let i = 0; i < modalContent.wQuestion[currentQuestion][currentFunction].length; i++) {
                        let h = (<Button  onClick={(e) => {this.handleAnswer(e, modalContent.wAnswer[currentQuestion][currentFunction][i])}}> {modalContent.wQuestion[currentQuestion][currentFunction][i]} </Button>)
                        modalButtons.push(h);
                    }
                }
                else {
                    for (let i = 0; i < modalContent.wQuestion[currentQuestion].length; i++) {
                        let h = (<Button  onClick={(e) => {this.handleAnswer(e, modalContent.wAnswer[currentQuestion][i])}}>{modalContent.wQuestion[currentQuestion][i]}</Button>)
                        modalButtons.push(h);
                    }
                }
            }
        }
        else {
            for (let i = 0; i < modalContent.wQuestion[currentQuestion].length; i++) {
                let h = (<Button key={i}  onClick={(e) => {this.handleAnswer(e, modalContent.wAnswer[currentQuestion][i])}}>{modalContent.wQuestion[currentQuestion][i]}</Button>)
                modalButtons.push(h);
                console.log(modalButtons);
            }
        }

        this.setState({
            currentQuestion: e.target.dataset.questiontype,
            currentForm: currentForm,
            [currentModal]: true
        });
    }

    handleAnswer(e, answerType) {
        let outputObject = this.state.output;
        let currentForm = this.state.currentForm;
        let objectSection = 's' + currentForm;
        let currentQuestion = this.state.currentQuestion;
        let currentAnswer = answerType;
        let currentModal = 'visible' + this.state.currentForm;
        // Creates s[i] in output
        if (outputObject[objectSection] === undefined || outputObject[objectSection] === null) {
            outputObject[objectSection] = {};
        }
        let previousAnswer = outputObject[objectSection].functionType;
        if (outputObject[objectSection].functionType !== undefined && outputObject[objectSection].functionType !== null & previousAnswer !== currentAnswer & currentQuestion === 'functionType') {
            outputObject[objectSection] = {};
        }
        // Adds current question and answer to s[i]
        outputObject[objectSection][currentQuestion] = currentAnswer;
        console.log(outputObject);

        this.setState({output: outputObject, [currentModal]: false });
    }

    onInput(e, parent) {
        let outputObject = this.state.output;
        let currentForm = parent.dataset.id;
        let objectSection = 's' + currentForm;
        let currentQuestion = e.target.dataset.questiontype;
        let value = e.target.value;

        outputObject[objectSection][currentQuestion] = value;

        this.setState({output: outputObject});
    }

    handleOk()  {
        let currentModal = 'visible' + this.state.currentForm;
        this.setState({
            [currentModal]: false,
        });
    }
    handleCancel () {
        let currentModal = 'visible' + this.state.currentForm;
        this.setState({
            [currentModal]: false,
        });
    }

    onCardDelete (e, parent, currentOutput) {
        this.props.onCardDelete();
        let out = this.state.output;
        delete out[currentOutput];
        this.setState({output: out});
        console.log('DELETED LAST CARD RECORD');
    }

    fourthQLogic (currentOutput) {
        if (this.state.output[currentOutput]) {
            if (this.state.output[currentOutput].triggerType === undefined || (this.state.output[currentOutput].triggerType === 'scroll' && this.state.output[currentOutput].scrollEnd === undefined))  {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }

    submitLogic (lastOutput) {
        if (this.state.output) {
            if (this.state.output[lastOutput] !== undefined) {
                if(this.state.output[lastOutput].targetID !== undefined) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }

    onSubmit() {
        console.log(this.state.output);
        let options = {
            url: 'http://myjscookbook.com:8080/generate',
            headers: {
                Authorization: `Bearer ${getAccessToken()}`
            },
            form: this.state.output
        };

        request.post(options, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
            // window.location.href = responseFile.file;
            if (response.statusCode !== (401 || 404)) {
                var blob = new Blob([body], {type: "text/plain;charset=utf-8"});
                FileSaver.saveAs(blob, 'output.js');
            } else {
                message.error('You\'re not authorized to access this file! Please log in and try again!');
            }

        });

    }

    saveDocument() {
        console.log(this.props.userData);
        if(this.props.docTitle === ('Project Title' || '')) {
            message.error('Please set a document title before saving!');
        }
        else {
            (function(){
                if (sessionStorage.getItem('userData') === null || sessionStorage.getItem('userData') === 'undefined') {
                        sessionStorage.setItem('userData', '{"documents": ""}')
                }
            })();

            let currentUserData = sessionStorage.getItem('userData')
            currentUserData = JSON.parse(currentUserData);
            console.log(currentUserData);
            if (!currentUserData) {
                currentUserData = {
                    documents: {[this.props.docTitle]: this.state.output}
                }
            }
            if (!currentUserData.documents) {
                currentUserData.documents = {
                    [this.props.docTitle]: this.state.output
                }
            } else {
                currentUserData.documents[this.props.docTitle] = this.state.output;
            }

            console.log(currentUserData);
            let bodyString = {user_metadata: currentUserData}
            bodyString = JSON.stringify(bodyString);
            console.log('bodyString');
            console.log(bodyString);
            let options = {
                url: 'http://myjscookbook.com:8080/userInfo/' + this.props.currentUser,
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                    "Content-Type": "application/json"

                },
                body: bodyString
            };
            request.patch(options, (error, response, body) => {
                console.log('Updating Auth0 With New Document');
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google ho
                message.success('Your file has been saved!')
            })
        }

    }

    clearDocument (e) {
        this.props.clearDocument();
        this.setState({output: {}});
    }

    componentWillReceiveProps(nextProps) {
        console.log('Component Recieved props');
        if (this.props.currentDocument && this.props.currentDocument !== 'newDocument') {
            this.setState({
                output: this.props.outputFromApp,
                docTitle: this.props.currentDocument,
            });
        }
    }

    render() {
        console.log(this.props.currentDocument);
        console.log(this.props.outputFromApp);
        let forms = [];

        for (let i = 0; i < this.props.numberOfForms; i++) {
            let currentFormRef = 'currentForm' + i;
            let currentInputRef = 'currentInput' + i;
            let currentVisableModal = 'visible' + i
            let currentOutput = 's' + i;
            let lastOutput = ('s' + (this.props.numberOfForms-1))

            let fourthQuestionLogic = this.fourthQLogic(currentOutput);

            let submitButtonLogic = this.submitLogic(lastOutput)
            console.log(submitButtonLogic);

            let invisify = {display: 'none'};

            let formHTML = (
                <div>
                    <Button type='dashed' className='new-document' onClick={this.clearDocument}>New Document</Button>
                    <Card>
                        <div className='formBox' key={i} data-id={i} ref={(element) => this[currentFormRef] = element}>
                            <Icon className='exit' type="minus-circle" style={((i+1) === this.props.numberOfForms && i !== 0) ? {} : {display: 'none'}} onClick={(e) => {this.onCardDelete(e, this[currentFormRef], currentOutput)}}/>
                            <div className='form'>
                                {/* Number & Check */}
                                <div className='card-number'>{[i + 1]}</div>
                                <Icon className='check-mark' type='check-circle' style={this.state.output[currentOutput] ? this.state.output[currentOutput].targetID ? {color: 'green'} : {color: 'grey'} : {color: 'grey'}} />
                                {/* First Question // FunctionType */}
                                <div className='questionBox'>
                                    <label>Hi there! I'd like to </label>
                                    <div
                                        className="question"
                                        data-questionType="functionType"
                                        onClick={(e) => {this.showModal(e, this[currentFormRef])} }
                                    >
                                        {this.state.output[currentOutput] ? this.state.output[currentOutput].functionType ? this.state.output[currentOutput].functionType : 'select an option' : 'select an option'}
                                    </div>
                                </div>
                                {/* Second Question // Function Sub Type */}
                                {(() => {
                                    if (this.state.output[currentOutput] !== undefined) {
                                        if (this.state.output[currentOutput].functionType === "updateText") {
                                            return (
                                                <div className='questionBox'>
                                                    <label>My updated text is</label>
                                                    <Input
                                                        value={this.state.output[currentOutput] ? this.state.output[currentOutput].updatedText : ''}
                                                        data-questionType="updatedText"
                                                        onChange={(e) => {this.onInput(e, this[currentFormRef])}}
                                                    ></Input>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className='questionBox' style={this.state.output[currentOutput] ? this.state.output[currentOutput].functionType ? {} : {display: 'none'} : {display: 'none'}}>
                                                    <label>The sub feature I'd like to use is </label>

                                                    <div
                                                        className="question"
                                                        data-questionType="functionSubType"
                                                        onClick={(e) => {this.showModal(e, this[currentFormRef])} }
                                                    >

                                                        {this.state.output[currentOutput] ? this.state.output[currentOutput].functionSubType ? this.state.output[currentOutput].functionSubType : 'select an option' : 'select an option'}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }
                                })()}
                                {/*Second Part Two*/}
                                {(() => {
                                    if (this.state.output[currentOutput] !== undefined) {
                                        if (this.state.output[currentOutput].functionType === "css") {
                                            return (
                                                <div className='questionBox' style={this.state.output[currentOutput] ? this.state.output[currentOutput].functionSubType ? {} : {display: 'none'} : {display: 'none'}}>
                                                    <label>MY CSS NAME IS</label>
                                                    <Input
                                                        data-questionType="cssClassName"
                                                        onChange={(e) => {this.onInput(e, this[currentFormRef])}}
                                                        value={this.state.output[currentOutput].cssClassName}
                                                    ></Input>
                                                </div>
                                            );
                                        }
                                        else if (this.state.output[currentOutput].functionSubType === "tooltip") {
                                            return (
                                                <div>
                                                    <div className='questionBox' style={this.state.output[currentOutput] ? this.state.output[currentOutput].functionSubType ? {} : {display: 'none'} : {display: 'none'}}>
                                                        <label>I'd like to make invisible via </label>
                                                        <div
                                                            className="question"
                                                            data-questionType="invisType"
                                                            onClick={(e) => {this.showModal(e, this[currentFormRef])} }
                                                        >
                                                            {this.state.output[currentOutput]  ? this.state.output[currentOutput].invisType? this.state.output[currentOutput].invisType : 'select an option' : 'select an option'}
                                                        </div>
                                                    </div>
                                                    <div className='questionBox' style={this.state.output[currentOutput] ? (this.state.output[currentOutput].invisType === 'display') ? {} : {display: 'none'} : {display: 'none'}}>
                                                        <label>I'd like my tooltip to have a display value of </label>
                                                        <div
                                                            className="question"
                                                            data-questionType="displayType"
                                                            onClick={(e) => {this.showModal(e, this[currentFormRef])} }
                                                        >
                                                            {this.state.output[currentOutput]  ? this.state.output[currentOutput].displayType ? this.state.output[currentOutput].displayType : 'select an option' : 'select an option'}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        else {
                                            return
                                        }
                                    }
                                })()}
                                {/* Third Question // TriggerType */}
                                {(() => {
                                    if (this.state.output[currentOutput] !== undefined) {
                                        if (this.state.output[currentOutput].functionType === "css") {
                                            return (
                                                <div className='questionBox' style={this.state.output[currentOutput] ? this.state.output[currentOutput].cssClassName ? {} : {display: 'none'} : {display: 'none'}}>
                                                    <label>I will trigger my function on </label>

                                                    <div
                                                        className="question"
                                                        data-questionType="triggerType"
                                                        onClick={(e) => {this.showModal(e, this[currentFormRef])} }
                                                    >
                                                        {this.state.output[currentOutput]  ? this.state.output[currentOutput].triggerType ? this.state.output[currentOutput].triggerType : 'select an option' : 'select an option'}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        else {
                                            return (
                                                <div className='questionBox' style={this.state.output[currentOutput] ? (this.state.output[currentOutput].functionSubType || this.state.output[currentOutput].updatedText) ? {} : {display: 'none'} : {display: 'none'}}>
                                                    <label>I will trigger my function on </label>

                                                    <div
                                                        className="question"
                                                        data-questionType="triggerType"
                                                        onClick={(e) => {this.showModal(e, this[currentFormRef])} }
                                                    >
                                                        {this.state.output[currentOutput] ? this.state.output[currentOutput].triggerType ? this.state.output[currentOutput].triggerType : 'select an option' : 'select an option'}
                                                    </div>
                                                </div>
                                            );
                                        }
                                    }
                                })()}
                                {/*Third Question Part Two // Scroll Mechanics*/}
                                <div className='questionBox' style={this.state.output[currentOutput] ? (this.state.output[currentOutput].triggerType === 'scroll') ? {} : {display: 'none'} : {display: 'none'}}>
                                    <label>My scroll will start at (px value)</label>
                                    <Input
                                        value={this.state.output[currentOutput] ? this.state.output[currentOutput].scrollStart : ''}
                                        data-questionType="scrollStart"
                                        onChange={(e) => {this.onInput(e, this[currentFormRef])}}
                                    ></Input>
                                    <br></br>
                                    <label>My scroll will end at (px value) (if no end type none)</label>

                                    <Input
                                        value={this.state.output[currentOutput] ? this.state.output[currentOutput].scrollEnd : ''}
                                        data-questionType="scrollEnd"
                                        onChange={(e) => {this.onInput(e, this[currentFormRef])}}
                                    ></Input>
                                </div>
                                {/* Fourth Question // TriggerID */}
                                <div className='questionBox' style={fourthQuestionLogic ? {} : {display: 'none'}} >
                                    <label>My trigger's ID or CSS is</label>
                                    <Input
                                        value={this.state.output[currentOutput] ? this.state.output[currentOutput].triggerID : ''}
                                        style={{width: '185px'}}
                                        data-questionType="triggerID"
                                        onChange={(e) => {this.onInput(e, this[currentFormRef], this[currentInputRef]);}}
                                    ></Input>
                                </div>
                                {/*Fifth Question // TargetID*/}
                                <div className='questionBox' style={this.state.output[currentOutput] ? this.state.output[currentOutput].triggerID ? {} : {display: 'none'} : {display: 'none'}}>
                                    <label>My target's ID or CSS is </label>
                                    <Input
                                        value={this.state.output[currentOutput] ? this.state.output[currentOutput].targetID : ''}
                                        data-questionType="targetID"
                                        onChange={(e) => {this.onInput(e, this[currentFormRef])}}
                                        style={{width: '185px'}}
                                    ></Input>
                                </div>
                            </div>


                            {/* Modal for All */}
                            <Modal
                                title={modalContent.title[this.state.currentQuestion]}
                                visible={this.state[currentVisableModal]}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                className="modal"
                                width="90%"
                                cancelText="Cancel"

                            >

                                {modalButtons}
                            </Modal>
                        </div>
                    </Card>
                </div>
            );
            forms.push(formHTML);
        }

        // Makes submit a JSX Object
        let submit = (<h1 />)
        {(() => {
            let submitOFF = (<Button className='submit-me'
                onClick={() => {this.onSubmit()}}
                style={{
                    float: 'right',
                    marginTop: '20px',
                    marginRight: '20px'
                }}
                type='primary'
                disabled='true'
                >
                    <span>Submit</span><Icon type="right" />
                </Button>);
            let submitON = (
                <div>
                <Button className='submit-me'
                    onClick={() => {this.onSubmit()}}
                    style={{
                        float: 'right',
                        marginTop: '20px',
                        marginRight: '20px'
                    }}
                    type='primary'
                disabled={false}
                >
                <span>Submit</span><Icon type="right" />
                </Button>
                <Button onClick={() => {this.saveDocument()}} style={{
                    float: 'right',
                    marginTop: '20px',
                    marginRight: '20px'
                }} >
                    Save Document
                </Button>
            </div>);


            if (this.state.output) {
                if (this.state.output['s' + (this.props.numberOfForms-1)] !== undefined) {
                    if(this.state.output['s' + (this.props.numberOfForms-1)].targetID !== undefined) {
                        submit = submitON;
                        console.log('Good to go, captain.');
                    }
                    else {
                        submit = submitOFF;
                    }
                }
                else {
                    submit = submitOFF;
                }
            }
            else {
                submit = submitOFF;
            }

        })()}

        forms.push(submit)

        return(
            <div>
                {forms}
            </div>
        );
    }

}

class NewFormButton extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.newFormClick();
    }

    render() {
        return(
            <div>
                <Icon className="new-form" onClick={() => this.handleClick()} type="plus-circle" style={{color: 'rgba(0, 168, 84, 0.57)'}}/>
            </div>
        );
    }

}

export default Main;
