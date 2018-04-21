import { Component, OnInit } from '@angular/core';
import { DetailsService } from "./details.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

	private mypet:any;
	private feedback:any;
  constructor(private aroute:ActivatedRoute, private router:Router, private ds:DetailsService) { }

  ngOnInit() {
  	this.aroute.params.subscribe((params: Params)=>{
  		this.ds.get_pet(params['id'], (data)=>{
			if(data.errors){
	  			this.feedback=data.errors;
	  		}else{
	  			this.mypet=data;
	  		}
  		});
  	});
  }

  remove_pet(){
  	this.aroute.params.subscribe((params:Params)=>{
  		this.ds.remove_pet(this.mypet._id, (data)=>{
			if(data.errors){
	  			this.feedback=data.errors;
	  		}else{
	  			this.router.navigate(['']);
	  		}
  		});
  	});
  }

}
