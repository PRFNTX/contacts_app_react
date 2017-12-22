import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import WrappedLink from "../components/wrapped-link"


class ContactItem extends Component{
	render(){
		return(
			<div>
				<img style={{display:'inline-block'}} href={this.props.contact.Image} />
				<div style={{display:'inline-block'}}>
					<h2 style={{'margin-bottom':0}} >{this.props.contact.Name}</h2>
					<p style={{'margin-top':0,'margin-left':"5%"}} >{this.props.contact.Display+": "+this.props.contact[this.props.contact.Display]}</p>
				</div>
				<WrappedLink style={{display:'inline-block'}} to={"/edit/"+(this.props.contact._id)} text="Edit" />
			</div>
		);
	}
}

export default ContactItem
