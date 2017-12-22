import React, { Component } from "react"

import storage from "../modules/storage"


class ContactForm extends Component{

	constructor(props){
		super(props)
		this.fields=[
				'Name',
				'Detail',
				'Phone',
				'Email',
				'Twitter',
				'Image',
			]
		this.edit=false
		this.id=null
		
	}

	componentWillMount(){
		//checks to see if the pages was loaded to edit
		//fills data and changes functions of some buttons
		//alternatively could use props and move contacts to app.js state
		if (Object.keys(this.props.match.params).includes("contact")){
			storage.getContact(this.props.match.params.contact).then(
				result=>{
					Object.keys(result).filter(val=>this.fields.includes(val)).forEach((val)=>{
						this[val].value=result[val]	
					})
					this["Display"].value=result.Display
					this.edit=true
					this.id=result._id
				}
			)
		}
	}

	handleSubmit(e){
		e.preventDefault()
		let contact={}
		//reduce?
		this.fields.forEach((val)=>{
			contact[val]=e.target.elements[val].value
		})
		contact["Display"]=e.target.elements["Display"].value
		//put request	
		if (this.edit){
			storage.editContact(contact,this.id).then(
				result=>{
					window.location.pathname="/"
				}
			).catch(err=>{console.log(err)})
		} else {
			//post request
			storage.addContact(contact).then(
				result=>{
					window.location.pathname="/"
				}
			).catch(err=>{console.log(err)})
		}
	}

	render(){
		//convert fields to input items
		//potential to add custom fields
		let fields=this.fields.map(val=>{
			return <div>
				<label htmlFor={val} >{val+": "}</label>
				<input ref={(ref)=>this[val]=ref} type="text" id={val} placeholder={"enter "+val} name={val} />
			</div>
		})

		//choose field to display on contact list
		let infoFieldOptions = this.fields.slice(1).map(val=>{
			return <option value={val} >{val}</option>
		}) 
		return(
			<div>
				<form onSubmit={(e)=>this.handleSubmit(e)}>
					{fields}
					<label htmlFor="Display">Display Property</label>
					<select ref={(ref)=>this.Display=ref} id="Display" defaultValue="Detail" name="Display">
						{infoFieldOptions}
					</select>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ContactForm
