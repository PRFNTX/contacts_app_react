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
		/*
		this.values:{
				Name:"",
				Detail:"",
				Phone:"",
				Email:"",
				Twitter:"",
				Image:"",
				Display:"Detail"
			}
		}
		*/
		this.edit=false
		this.id={value:null}
		
	}

	componentWillMount(){
		if(this.props.match.hasOwnProperty("contact")){
			storage.getContact(this.props.match.contact).then(
				result=>{
					console.log("contact in unhandled",result)
					Object.keys(result).forEach((val)=>{
						this[val].value=result[val]	
					})
					this.edit=true
					
				}
			)
		}
	}

	handleSubmit(e){
		e.preventDefault()
		console.log(e)
		let contact={}
		this.fields.forEach((val)=>{
			console.log(val)
			contact[val]=e.target.elements[val].value
		})
		contact["Display"]=e.target.elements["Display"].value
	
		if (this.edit){
			storage.editContact(contact,this.id.value).then(
				result=>{
					window.location.pathname="/"
				}
			).catch(err=>{console.log(err)})
		} else {
			storage.addContact(contact).then(
				result=>{
					window.location.pathname="/"
				}
			).catch(err=>{console.log(err)})
		}
	}

	render(){
		console.log(this.fields)
		let fields=this.fields.map(val=>{
			return <div>
				<label for={val} >{val+": "}</label>
				<input ref={(ref)=>this[val]=ref} type="text" id={val} placeholder={"enter "+val} name={val} />
			</div>
		})

		let infoFieldOptions = this.fields.slice(1).map(val=>{
			return <option value={val} >{val}</option>
		}) 
		return(
			<div>
				<form onSubmit={(e)=>this.handleSubmit(e)}>
					{fields}
					<label for="Display">Display Property</label>
					<select id="Display" defaultValue="Detail" name="info">
						{infoFieldOptions}
					</select>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ContactForm
