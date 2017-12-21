import React, { Component } from "react"


class ContactForm extends Component{
	constructor(){
		super()
		this.state={
			fields:[
				{title:"Name",value:""},
				{title:"Phone",value:""},
				{title:"E-mail",value:""},
				{title:"Image",value:""},
			],
		}
	}

	/*
	{
	field={
		title:"",
		value""
	}
	*/

	/*
	addField(div){
		console.log(div)	
		let title=div.children.title.value
		let value=div.children.value.value
		let newState=[...this.state.fields,{title,value}]
		this.setState({
			fields:newState
		})
	}
	*/

	render(){
		let fields=this.state.fields.map(val=>{
			<div>
				<label for={val.title} >{val.title+": "}</label>
				<input type="text" id={val.title} placeholder={"enter "+val.title} name={val.title} value={val.value} />
			</div>
		})

		let infoFieldOptions = this.state.fields.map(val=>{
			return <option value={val.title} >{val.title}</option>
		}) 
		return(
			<div>
				<form>
					{fields}
					<div ref={(ref)=>this.newField=ref}>
						<input type="text" name="title" placeholder="new field name..." />
						<input type="text" name="value" placeholder="new field value..." />
						<button type="button" onClick={()=>this.addField(this.newField)} >Add</button>
					</div>
					<select name="info">
						{infoFieldOptions}
					</select>
					<input type="submit" />
				<form>
			</div>
		);
	}
}
