import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "../styles/contact-item.css"

import WrappedLink from "../components/wrapped-link"

function stylesConcat(styles){
	let ret=""
	styles.forEach(val=>{
		ret+=(val+" ")
	})
	return ret
}

class ContactItem extends Component{
	render(){
		return(
			<div className="item">
				<img src={this.props.contact.Image} alt={this.props.contact.Image}/>
				<div className="inlineBlock">
					<h2 className="botMar0" >{this.props.contact.Name}</h2>
					<p className="topMar0 shiftRight" >{this.props.contact.Display+": "+this.props.contact[this.props.contact.Display]}</p>
				</div>
				<WrappedLink className="inlineBlock right" to={"/edit/"+(this.props.contact._id)} text="Edit" />
			</div>
		);
	}
}

export default ContactItem
