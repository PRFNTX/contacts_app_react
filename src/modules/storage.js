import axios from "axios"

class storage{
	//check state synchronus,
	checkContactsLocal(){
		let contacts=JSON.parse(localStorage.getItem("contacts"))
		return contacts
	}

	//ensures database matches local... i think TODO
	saveContacts(contacts){
		localStorage.setItem("contacts",JSON.stringify(contacts))
	}

	//saves an edited contact to database and matches local 
	editContact(contact,id){
		return axios.put("/contacts/"+id,{contact}).then(
			result=>{
				let currentLocal = JSON.parse(localStorage.getItem("contacts"))
				if (currentLocal!==null){
					currentLocal = currentLocal.map(contact=>{
						if (contact._id===result.data.saved._id){
							return result.data.saved
						} else {
							return contact
						}
					})	
				} else {
					currentLocal=[result.data.saved]	
				}
				localStorage.setItem("contacts",JSON.stringify(currentLocal))
				return true
			}
		)
	}

	//saves new contact and matches local
	addContact(contact){
		return axios.post("/contacts",{contact}).then(
			result=>{
				let currentLocal = JSON.parse(localStorage.getItem("contacts"))
				currentLocal = currentLocal===null ? [result.data.saved] : currentLocal.concat(result.data.saved)
				localStorage.setItem("contacts",JSON.stringify(currentLocal))
				return true
			}
		)
	}

	//async get contacts, will get rom server if local storage is empty
	//TODO ensure local storage matches server?
	async checkContactsAndGet(){
		let contacts=JSON.parse(localStorage.getItem("contacts"))
		if (contacts===null){
			contacts=axios.get("/contacts").then(
				results=>{
					this.saveContacts(results.data.contacts)
					return results.data.contacts
				}
			)
		} 
		return contacts	
	}

	//checks local stoarage for contact
	getContactLocal(id){
		let contacts= JSON.parse(localStorage.getItem("contacts"))
		if (contacts){
			return contacts.filter(val=>val._id===id)
		}
		return null
	}


	//gets contact from local storage or server
	async getContact(id){
		let contacts= JSON.parse(localStorage.getItem("contacts"))
		if (contacts!==null && (contacts.filter(val=>val._id===id).length>0)){
			return contacts.reduce((a,val)=>{return val._id===id ? val : a})
		}	else {
			return axios.get("/contacts/"+id).then(
				result=>{
					return result.data.result
				}
			)
		}
	}

	deleteContact(id){
		return axios.delete("/contacts/"+id).then(
			result=>{
				let contacts=JSON.parse(localStorage.getItem("contacts")).filter(val=>val._id!==id)
				localStorage.setItem("contacts",JSON.stringify(contacts))
				return result
			}
		)
	}

}

export default new storage
