import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


class ContactItem extends Component{
	render(){
		return(
			<div>
				<img href="" />
				<div>
					<h3>Name</h3>
					<span> Info </span>
				</div>
				<button>Edit</button>
			</div>
		);
	}
}

export default ContactItem
