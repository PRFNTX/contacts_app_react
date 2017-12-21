import React, { Component } from "react"

import storage from "../modules/storage"


class ContactForm extends Component{

	constructor(props){
		super(props)
		this.fields=[
				'Name',
				'Detail',
				'Phone',
				'E-mail',
				'Twitter',
				'Image',
			]
		this.values={
				Name:"",
				Detail:"",
				Phone:"",
				E-mail:"",
				Twitter:"",
				Image:"",
				Display:"Detail"
			}
		this.edit=false;
		
	}

	componentWillMount(){
		if(this.props.match.hasOwnProperty("contact")){
			storage.getContact(this.props.match.contact).then(
				result=>{
					console.log("contact in unhandled",result)
					//this.edit=true
				}
			)
		}
	}

	handleSubmit(e){
		e.preventDefault()
		//this.props.submit(e)
		
	}

	render(){
		let fields=this.fields.map(val=>{
			<div>
				<label for={val} >{val+": "}</label>
				<input type="text" id={val} placeholder={"enter "+val} name={val} value={this.values[val]} />
			</div>
		})

		let infoFieldOptions = this.fields.slice(1).map(val=>{
			return <option value={val.title} selected={String(val===this.values[this.values.display])}>{val.title}</option>
		}) 
		return(
			<div>
				<form onSubmit={(e)=>handleSubmit(e)}>
					{fields}
					<select name="info">
						{infoFieldOptions}
					</select>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ContactForm
