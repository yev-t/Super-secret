import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class EditpetService {

  constructor(private http:HttpClient) { }

    edit_pet(pet_id, new_pet_info ,callback){
	  	this.http.put("/api/"+pet_id, new_pet_info).subscribe((data)=>{
	  		callback(data);
	  	});
  	}

  	  get_pet(pet_id, callback){
	  	this.http.get("/api/"+pet_id).subscribe((pet_found)=>{
			callback(pet_found);
	  	});

	}

}
