let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var threeMax = function(skills){
	return skills.length <= 3;
}

var PetSchema = new mongoose.Schema({
	name: {
		type:String,
		required:[true, "Pet name is required"],
		minlength:[3, "Pet name needs to be atleast 3 characters long"],
		maxlength:[255, "Pet name needs to be at most than 255 characters long"]
	},
	type: {
		type:String,
		required:[true, "Pet type is required"],
		minlength:[3, "Pet type needs to be atleast 3 characters long"],
		maxlength:[255, "Pet type needs to be at most than 255 characters long"]
	},
	description: {
		type:String,
		required:[true, "Pet description is required"],
		minlength:[3, "Pet description needs to be atleast 3 characters long"],
		maxlength:[255, "Pet description needs to be at most than 255 characters long"]
	},
	skills: {
		type: [{
			type:String,
			minlength:[3, "Pet skills needs to be atleast 3 characters long"],
			maxlength:[255, "Pet skills needs to be at most than 255 characters long"]
		}],
		validate: [threeMax, "Your pet can't have more than 3 listed skills"]
	},
}, {timestamps:true});


mongoose.model("Pet", PetSchema);  //Instantiating