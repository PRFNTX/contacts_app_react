import React, { Component } from 'react'
import ContactItem from "./contact-item"

class ContactList extends Component{
	
	editContact(id){
		//TODO redirect to /edit/"+id
		console.log("gonna edit")
	}

	render(){
		let contacts=this.props.contacts.map(val=>{
			return(
				<ContactItem contact={val} edit={this.editContact} />
			)
		})
		return(
			<div>
				{contacts}
			</div>
		);
	}
}

export default ContactList
