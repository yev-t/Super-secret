let Pet = require("mongoose").model("Pet");

class PetController {

	all(req, res) {    //Find all pets
		Pet.find({}, (err, pets_found)=>{
			if (err){
				return res.json(err);
			}else{
				return res.json(pets_found);
			}
		});
	}

	newPet(req, res) {   //Create new pet entry into DB
		console.log(req.body);
		Pet.find({name:req.body.name},(err, pet_found)=>{
			if (pet_found.length>0){
				return res.json({errors:{create:{message:"A pet with that name is already listed"}}});
			}else{
				let new_pet = new Pet(req.body);
				new_pet.save((err)=>{
					if (err){
						return res.json(err);
					}else{
						return res.json(new_pet);
					}
				});
			}
		});

	}

	findPet(req, res) {   //Find individual pets by ID
		Pet.findOne({_id:req.params.id}, (err, pet_found)=>{
			if (err){
				return res.json(err);
			}else{
				return res.json(pet_found);
			}
		});
	}

	removePet(req, res) {   //Remove individual pets
		Pet.findOne({_id:req.params.id}, (err, pet_found)=>{
			if (err){
				return res.json({errors:err});
			}else{
				Pet.remove({_id:req.params.id}, (err)=>{
					if (err){
						return res.json(err);
					}else{
						return res.json(pet_found);
					}
				});
			}
		});
	}

	updatePet(req, res) {
		Pet.findOne({_id:req.params.id}, (err, pet_found)=>{
			if (err){
				return res.json(err);
			}else{
				Pet.find({name:req.body.name}, (err, duplicate)=>{
					for (let x=0; x<duplicate.length;x++){
						if (duplicate[x]._id==req.params.id){
							duplicate.splice(x,1);
						}
					}
					if (err){
						return res.json(err);
					}else if (duplicate.length>0){
						return res.json({errors:{update:{message:"A pet with this name already exists, please choose a unique name"}}});
					}else{
						Pet.update({_id:pet_found._id}, {$set:req.body}, {runValidators: true}, (err, update_info)=>{
							if(err){
								return res.json(err);
							}else{
								Pet.findOne({_id:pet_found._id}, (err, updated_pet)=>{
									if (err){
										return res.json({errors:{update:{message:"Oops, we were unable to retrieve your newly updated pet"}}});
									}else{
										return res.json(updated_pet);
									}
								});
							}
						});
					}
				});
			}
		});
	}
}
module.exports = new PetController();