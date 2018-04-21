import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { NewpetComponent } from "./newpet/newpet.component";
import { DetailsComponent } from "./details/details.component";
import { EditpetComponent } from "./editpet/editpet.component";

const routes: Routes = [
	{path:"", component:HomePageComponent},
	{path:"new", component:NewpetComponent},
	{path:"details/:id", component:DetailsComponent},
	{path:"edit/:id", component:EditpetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
