import React, { Component } from 'react'
import ContactItem from "./contact-item"

class ContactList extends Component{
	
	render(){
		let contacts=[]
		if (this.props.contacts.length>0){
			contacts=this.props.contacts.map(val=>{
				return(
					<ContactItem contact={val} />
				)
			})
		}
		return(
			<div>
				{contacts}
			</div>
		);
	}
}

export default ContactList
