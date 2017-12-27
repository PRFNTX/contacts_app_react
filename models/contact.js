const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
	Name:String,
	Detail:String,	
	Phone:String,	
	Email:String,	
	Twitter:String,	
	Image:String,	
	Display:String,
	FIle:String,
})

module.exports = mongoose.model("contact",contactSchema)
