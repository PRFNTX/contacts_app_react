import React, { Component } from 'react'
import storage from "../modules/storage"

class Main extends Component{
	constructor(){
		super()
		this.state={
			contacts:[],
		}
	}

	
	componentWillMount(){
		storage.checkContactsAndGet().then(
			result=>{
				console.log(result)
				this.setState({
					contacts:result
				})
			}
		)
	}

	handleAdd(){
		//TODO reroute to new
	}

	handleEdit(){
		//TODO reroute to edit
	}

	render(){
		return(
			<div>
				<h1>Super Contact App</h1>
				<ContactList contacts={this.state.contacts}/>
				<button onClick={this.handleAdd} >Add Contact</button>
			</div>
		);
	}
}
