export default class storage{
	checkContactsLocal(){
		let contacts=localStorage.getItem("contacts")
		return contacts
	}

	async checkContactsAndGet(){
		let contacts=localStorage.getItem("contacts")
		if (contacts===null){
			contacts=await axios.get("/contacts").then(
				results=>{
					saveContacts(results.data)
					return results.data
				}
			)
		} 
		return contacts	
	}

	saveContacts(contacts){
		console.log(contacts)
		localStorage.setItem("contacts",contacts)
		return axios.post("/contacts",contacts).then(
			result=>{
				return result
			}	
		)
	}

	getContactLocal(id){
		let contacts= localStorage.getItem("contacts")
		if (contacts){
			return contacts.filter(val=>val.id===id)
		}
		return null
	}

	async getContact(id){
		let contacts= localStorage.getItem("contacts")
		if (contacts){
			return contacts.filter(val=>val.id===id)
		}	else {
			return axios.get("/contacts/"+id).then(
				result=>{
					return result.data
				}
			)
		}
		
	}

}
