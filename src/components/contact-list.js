import React, { Component } from 'react'
import ContactItem from "./contact-item"

class ContactList extends Component{
	constructor(){
		super()
		this.state={
			expanded:null,
		}
		this.exclude=["Image","Display","__v","_id"]
	}
	
	expandItem=(id)=>{
		this.setState({
			expanded:id
		})	
	}
	render(){
		let contacts=[]
		if (this.props.contacts.length>0){
			contacts=this.props.contacts.map(val=>{
				return(
					<div>
						<ContactItem expand={this.expandItem} delete={this.props.delete} contact={val} />
						<div className={this.state.expanded===val._id ? "half center fillY expandedDetails" : "half center fillY"} >
							{val._id===this.state.expanded && Object.keys(val).slice(1).filter(key=>!this.exclude.includes(key)).map(key=>{
								return (
									<div className="center-text">
										<span className="half">
											{key+": "}
										</span>
										<span className="half">
											{val[key]}
										</span>
									</div>
								)
							})}
						</div>
					</div>
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
