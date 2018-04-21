import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HomePageService {

  constructor(private http:HttpClient) { }

  all_pets(callback){
  	this.http.get("/api").subscribe((pets_retrieved)=>{
  		callback(pets_retrieved);
  	});
  }

}
