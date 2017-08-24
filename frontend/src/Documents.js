import React, { Component } from 'react';
import logo from './logo.svg';
import './css/documents.css';

import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon'

//Gives App the ability to have onpage links
import {Link} from 'react-router';

//Import auth0
import { getAccessToken } from './utils/AuthService';
var request = require('request');


class Documents extends React.Component {
    constructor() {
        super();
        this.state = {};

        this.deleteClick = this.deleteClick.bind(this);
    }

    componentWillMount() {
        this.props.currentPage('documents');
        this.props.dataUpdate();
    }

    deleteClick(e) {
        let currentDocuments = this.props.userData.documents;
        let deleteTarget = e.target.dataset.key
        delete currentDocuments[deleteTarget];
        console.log(currentDocuments);
        let bodyString = {user_metadata: {"documents": currentDocuments}}
        bodyString = JSON.stringify(bodyString)
        console.log(bodyString)
        let options = {
            url: 'http://localhost:8080/userInfo/' + this.props.currentUser,
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
            this.setState({userData: currentDocuments})
        });
    }

    setCurrentFile(e, fileName, file) {
        this.props.setCurrentFile(e, fileName, file);
    }

    render() {
        let documentsJSX = [];
        console.log(this.props.userData);
        if (this.props.userData) {
            for (let key in this.props.userData.documents) {
                let h = (
                    <Link to='main' onClick={(e) => {this.setCurrentFile(e, key, this.props.userData.documents[key])}}>
                    <Card title='Document' key={key} onClick={(e) => {this.setCurrentFile(e, key, this.props.userData.documents[key])}}>
                    <Icon type="close-circle" style={
                        {
                            color: 'red',
                            position: 'absolute',
                            right: '10px',
                            top: '15px'
                        }
                    } data-key={key} onClick={this.deleteClick}></Icon>
                    <h2>{key}</h2>
                </Card></Link>)

                documentsJSX.push(h);
            }
        }



        return(
            <div id="documents-main">
                {documentsJSX}
            </div>

        );
    }

}

export default Documents;
