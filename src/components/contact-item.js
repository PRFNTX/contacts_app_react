import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import WrappedLink from "../components/wrapped-link"


class ContactItem extends Component{
	render(){
		console.log("item",this.props.contact.Image)
		return(
			<div>
				<img href={this.props.contact.Image} />
				<div>
					<h2>{this.props.contact.Name}</h2>
					<p>{this.props.contact[this.props.contact.Display]}</p>
				</div>
				<WrappedLink to={"/edit/"+(this.props.contact._id)} text="Edit" />
			</div>
		);
	}
}

export default ContactItem
