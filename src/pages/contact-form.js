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
		this.state={
			values:{
				Name:"",
				Detail:"",
				Phone:"",
				Email:"",
				Twitter:"",
				Image:"",
				Display:"Detail"
			}
		}
		
	}

	shouldComponentUpdate(nextProps,nextState){
		//try to catch only instances where data is received for editing
		if (!(this.state.values.Name) && nextState.values.Name){
			return true
		}
		return false
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
		console.log(this.fields)
		let fields=this.fields.map(val=>{
			return <div>
				<label for={val} >{val+": "}</label>
				<input type="text" id={val} placeholder={"enter "+val} name={val} value={this.state.values[val]} />
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
					<select id="Display" defaultValue={this.state.values.Display} name="info">
						{infoFieldOptions}
					</select>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default ContactForm
