import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DetailsService {

  constructor(private http:HttpClient) { }

  	get_pet(pet_id, callback){
	  	this.http.get("/api/"+pet_id).subscribe((pet_found)=>{
			callback(pet_found);
	  	});

	}

	remove_pet(pet_id, callback){
	  	this.http.delete("/api/"+pet_id).subscribe((data)=>{
			callback(data);
	  	});

	}
}
