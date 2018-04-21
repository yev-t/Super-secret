import { Component, OnInit, Injectable } from '@angular/core';
import { NewpetService } from "./newpet.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-newpet',
  templateUrl: './newpet.component.html',
  styleUrls: ['./newpet.component.css']
})
export class NewpetComponent implements OnInit {

	private new_pet={
		name:"",
		type:"",
		description:"",
		skills:[]
	};

	private feedback:any;

  constructor(private nps:NewpetService, private router:Router) { }

  ngOnInit() {
  }

  create_pet(){
  	this.nps.new_pet(this.new_pet, (data)=>{
  		if(data.errors){
  			this.feedback=data.errors;
  		}else{
  			this.router.navigate(['']);
  		}
  	});
  }
}
