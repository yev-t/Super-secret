import { Component, OnInit } from '@angular/core';
import { EditpetService } from "./editpet.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {

	private mypet:any;
	private feedback:any;
  constructor(private eps:EditpetService, private router:Router, private aroute:ActivatedRoute) { }

  ngOnInit() {

  	this.aroute.params.subscribe((params: Params)=>{
  		this.eps.get_pet(params['id'], (data)=>{
		if(data.errors){
  			this.feedback=data.errors;
  		}else{
  			this.mypet=data;
  		}
  		});
  	});

  }

    edit_pet(){
  	this.eps.edit_pet(this.mypet._id, this.mypet, (data)=>{
  		if(data.errors){
  			this.feedback=data.errors;
  		}else{
  			this.router.navigate(['']);
  		}
  	});
  }

}
