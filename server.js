const express = require("express")
const app=express()

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/Contacts")

const Contact=require("./models/contact")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=8080

app.get("/contacts/:id",(req,res)=>{
	Contact.findOne({_id:req.params.id}).then(
		result=>{
			res.json({result})
		}
	).catch(err=>{
		res.status(400).json({message:"request failed"})
	})
})

app.get("/contacts",(req,res)=>{
	Contact.find({}).then(
		contacts=>{
			console.log(contacts)
			res.json({contacts})
		}
	).catch(err=>{
		res.status(400).json({test:"failed"})
	})
})

app.post("/contacts",(req,res)=>{
	let contact=req.body.contact
	Contact.create(contact).then(
		saved=>{
			res.json({saved})
		}
	).catch(err=>{
		res.status(400).json({message:"some or all failed"})
	})
})

app.put("/contacts",(req,res)=>{
	console.log(req.body)
	let contact=req.body.contact
	let id=req.body.id
	Contact.findOne({_id:id}).then(
		result=>{
			Object.keys(contact).forEach((val)=>{
				result[val]=contact[val]
			})
			return result.save()
		}
	).then(
		saved=>{
			res.json(saved)	
		}
	).catch(err=>{
		res.status(400).json({message:"some or all failed"})
	})
})

app.delete("/contacts/:id", (req,res)=>{
	Contact.findOne({_id:req.params.id}).remove().then(
		result=>{
			res.json({message:"item deleted"})
		}
	).catch(err=>{
		res.status(400).json({message:"failed to delete"})
	})
})

app.listen(PORT,()=>{
	console.log("server started on "+PORT)
})
