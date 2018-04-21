import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NewpetService {

  constructor(private http:HttpClient) { }

    new_pet(pet ,callback){
	  	this.http.post("/api", pet).subscribe((pet_created)=>{
	  		callback(pet_created);
	  	});
  	}

}
