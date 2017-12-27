import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "../styles/contact-item.css"
import storage from "../modules/storage"

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
		let contact=this.props.contact
		return(
			<div className="item rel">
				<div className="clickable fillY" onClick={()=>this.props.expand(contact._id)}>
					<img className="fillY" src={contact.Image} alt={contact.Image}/>
					<div className="inlineBlock top fillY spacing ">
						<h2 className="botMar0 topMar0" >{contact.Name}</h2>
						<p className="topMar0 shiftRight" >{contact.Display+": "+contact[contact.Display]}</p>
					</div>
				</div>
				<button className="inlineBlock right fillY" onClick={()=>this.props.delete(contact._id)} >Delete</button>
				<WrappedLink className="inlineBlock right fillY" to={"/edit/"+(contact._id)} text={"Edit"}/>
			</div>
		);
	}
}

export default ContactItem
