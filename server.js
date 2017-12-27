const express = require("express")
const app=express()

const fileSystem = require('fs')

const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/Contacts")

const Contact=require("./models/contact")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=8080

const filePath="./files/"

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
			res.json({contacts})
		}
	).catch(err=>{
		res.status(400).json({test:"failed"})
	})
})

//adds a contact
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

//edit contact
app.put("/contacts/:id",(req,res)=>{
	let contact=req.body.contact
	let id=req.params.id
	Contact.findByIdAndUpdate(id, {$set:contact},{new:true}).then(
		saved=>{
			res.json({saved})
			
		}
	).catch(err=>{
		res.status(400).json({message:"put failed"})
	})
})

//delete contact TODO
app.delete("/contacts/:id", (req,res)=>{
	Contact.findOne({_id:req.params.id}).remove().then(
		result=>{
			res.json({message:"item deleted"})
		}
	).catch(err=>{
		res.status(400).json({message:"failed to delete"})
	})
})


app.post("/file",(req,res)=>{
	console.log("got post file")
	let file=req.body.data	
	console.log(file)
	let filename=filePath+file.lastModified+file.name
	let stream=fileSystem.writeFile(filename,file.slice(0),(err)=>{
		if (err){
			res.status(501).json({message:"failed to write file"})
		}
		res.send(filename)
	})		
})

app.listen(PORT,()=>{
	console.log("server started on "+PORT)
})
