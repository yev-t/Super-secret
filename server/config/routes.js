let PetController = require("../controllers/PetController.js");  //Includes Pet Controller

let path = require("path");

module.exports=(app)=>{ //Routes

	/***************************************************************
			Back end (express) routes
	****************************************************************/

	app.get("/api", PetController.all);
	app.post("/api", PetController.newPet);
	app.get("/api/:id", PetController.findPet);
	app.put("/api/:id", PetController.updatePet);
	app.delete("/api/:id", PetController.removePet);

	/***************************************************************
		Redirect to front (angular) routes
	****************************************************************/

	app.all("*", (req, res, next)=>{
		res.sendFile(path.resolve("./client/dist/index.html"));
	});
}