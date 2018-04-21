import { Component, OnInit } from '@angular/core';
import { HomePageService } from "./home-page.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

	private pets:any;

  constructor(private router:Router, private hps:HomePageService) { }

  ngOnInit() {

  	this.pets = [];
  	this.hps.all_pets((pets_retrieved)=>{
  		this.pets = pets_retrieved;
  	});
  }

}
