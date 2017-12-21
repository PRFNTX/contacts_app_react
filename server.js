const express = require("express")
const app=express()

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/Contacts")

const Contact=require("./models/contact")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=8080

app.get("/contacts/:id",(req,res)=>{
	Contacts.findOne({_id:req.params.id}).then(
		result=>{
			res.json({result})
		}
	).catch(err=>{
		res.status(400).json({message:"request failed"})
	})
})

app.get("/contacts",(req,res)=>{
	Contacts.find({}).then(
		found=>{
			res.json(result:found)
		}
	).catch(err=>{
		res.status(400).json({test:"failed"})
	})
})

app.post("/contacts",(req,res)=>{
	//contacts list should be an array
	let contacts=res.body.contacts
	contacts.map(val=>{
		return Contact.findOne({_id:val._id}).then(
			found=>{
				found=new Contact({val})
				return found.save()
			}
		)
	}).all(
		res.json({message:"success"})
	).catch(err=>{
		res.status(400).json({message:"some or all failed"})
	})
})

app.delete("/contacts/:id", (req,res)=>{
	Contacts.findOne({_id:req.params.id}).remove().then(
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
