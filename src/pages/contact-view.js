import React, { Component } from "react"

import storage from "../modules/storage"

class ContactView extends Component{
	constructor(){
		super()
		this.state={
			contact:{},
		}
	}
	componentWillMount(){
		//...am i just emulating redux?...
		//i should finish learning redux...
		storage.getContact(this.props.match.contact).then(
			result=>{
				this.setState({
					contact:result
				})
			}
		)
	}

	render(){
		let fields=Object.keys(this.state.contact).map(val=>{
			<div>
				<label for={val} >{val+": "}</label>
				<input type="text" id={val} placeholder={"enter "+val} name={val} value={this.state.contact[val]||""} />
			</div>
		})
		return(
			<div>
				{fields}
			</div>
		);
	}
}

export default ContactView
