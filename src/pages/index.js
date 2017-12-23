import React, { Component } from 'react'
import storage from "../modules/storage"

import "../App.css"

import ContactList from "../components/contact-list"
import WrappedLink from "../components/wrapped-link"

class Main extends Component{
	constructor(){
		super()
		this.state={
			contacts:[],
		}
	}

	
	componentWillMount(){
		//fill list from localStorage or from server
		//should probably lift this state
		this.update()
	}

	update=()=>{
		storage.checkContactsAndGet().then(
			result=>{
				console.log(result)
				this.setState({
					contacts:result
				})
			}
		)
	}

	deleteContact=(id)=>{	
		storage.deleteContact(id).then(
			result=>{
				this.update()
			}
		)
	}



	render(){
		
		return(
			<div >
				<h1 className="center-text" >Super Contact App</h1>
				<ContactList delete={this.deleteContact} contacts={this.state.contacts}/>
				<WrappedLink className="center-fixed block half contact-add" to="/new" text="Add Contact" />
			</div>
		);
	}
}

export default Main
