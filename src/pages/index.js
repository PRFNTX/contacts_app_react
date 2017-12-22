import React, { Component } from 'react'
import storage from "../modules/storage"

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
		storage.checkContactsAndGet().then(
			result=>{
				console.log(result)
				this.setState({
					contacts:result
				})
			}
		)
	}



	render(){
		return(
			<div>
				<h1>Super Contact App</h1>
				<ContactList contacts={this.state.contacts}/>
				<WrappedLink to="/new" text="Add Contact" />
			</div>
		);
	}
}

export default Main
