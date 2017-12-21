import React, { Component } from "react"


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
		this.display=props.display||"Detail"
	}

	handleSubmit(e){
		e.preventDefault()
		this.props.submit(e)
	}

	render(){
		let fields=this.fields.map(val=>{
			<div>
				<label for={val} >{val+": "}</label>
				<input type="text" id={val} placeholder={"enter "+val} name={val} value={this.props.values[va]||""} />
			</div>
		})

		let infoFieldOptions = this.fields.slice(1).map(val=>{
			return <option value={val.title} selected={String(val===this.display)}>{val.title}</option>
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
