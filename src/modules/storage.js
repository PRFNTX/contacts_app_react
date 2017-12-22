import axios from "axios"

class storage{
	checkContactsLocal(){
		let contacts=JSON.parse(localStorage.getItem("contacts"))
		return contacts
	}

	saveContacts(contacts){
		console.log(contacts)
		localStorage.setItem("contacts",JSON.stringify(contacts))
		return axios.post("/contacts",contacts).then(
			result=>{
				console.log(result)
				return result.data
			}	
		)
	}

	editContact(contact,id){
		return axios.put("/contacts",{contact,id}).then(
			result=>{
				let currentLocal = JSON.parse(localStorage.getItem("contacts"))
				if (currentLocal===null){
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
				console.log(currentLocal)
				localStorage.setItem("contacts",JSON.stringify(currentLocal))
				return true
			}
		)
	}

	addContact(contact){
		return axios.post("/contacts",{contact}).then(
			result=>{
				let currentLocal = JSON.parse(localStorage.getItem("contacts"))
				currentLocal = currentLocal===null ? [result.data.saved] : currentLocal.concat(result.data.saved)
				console.log(currentLocal)
				localStorage.setItem("contacts",JSON.stringify(currentLocal))
				return true
			}
		)
	}

	async checkContactsAndGet(){
		let contacts=JSON.parse(localStorage.getItem("contacts"))
		console.log(contacts)
		if (contacts===null){
			contacts=await axios.get("/contacts").then(
				results=>{
					this.saveContacts(results.data.contacts)
					console.log(results.data.contacts)
					return results.data.contacts
				}
			)
		} 
		return contacts	
	}

	getContactLocal(id){
		let contacts= JSON.parse(localStorage.getItem("contacts"))
		if (contacts){
			return contacts.filter(val=>val._id===id)
		}
		return null
	}

	async getContact(id){
		let contacts= JSON.parse(localStorage.getItem("contacts"))
		if (contacts){
			return contacts.filter(val=>val._id===id)
		}	else {
			return axios.get("/contacts/"+id).then(
				result=>{
					return result.data
				}
			)
		}
		
	}

}

export default new storage
