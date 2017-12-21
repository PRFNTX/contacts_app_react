import React, { Component } from 'react'

class Main extends Component{
	constructor(){
		super()
		this.state={
			contacts:[],
		}
	}

	fetchContacts=()=>{
		axios.get("/contacts").then(
			result=>{
				localStorage.setItem("contacts",result.data)
				this.setState({
					contacts:result.data,
				})
			}
		)
	}
	
	componentWillMount(){
		let contacts=localStorage.getItem("contacts")
		if (contacts===null){
			//TODO addAuth
			this.fetchContacts()
		} else {
			this.setState({
				contacts:contacts,
			})
		}
	}

	render(){
		return(
			<div>
				<h1>Super Contact App</h1>
				<ContactList/>
				<ContactNew/>
			</div>
		);
	}
}
