import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


class ContactItem extends Component{
	render(){
		return(
			<div>
				<img href={this.props.contact.Image} />
				<div>
					<h2>{this.props.contact.Name}</h2>
					<p>{this.props.contact[this.props.contact.Display]}</p>
				</div>
				<button onClick={()=>this.props.edit(this.props.contact._id)}>Edit</button>
			</div>
		);
	}
}

export default ContactItem
