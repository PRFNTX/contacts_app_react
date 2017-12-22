import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from "./components/contact-list"
import ContactItem from "./components/contact-item"

import ContactView from "./pages/contact-view"
import ContactForm from "./pages/contact-form" 
import Main from "./pages" 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
		<Router>
			<Switch>
				<Route path="/" exact component={Main}/>
				<Route path="/new" component={ContactForm}/>
				<Route path="/edit/:contact" component={ContactForm}/>
				<Route path="/view/:contact" component={ContactView}/>
			</Switch>
		</Router>
    );
  }
}

export default App;
