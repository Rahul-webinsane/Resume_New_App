import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "services", component: ServicesComponent},
  {path: "about", component: AboutMeComponent},
  {path: "contact", component: ContactUsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
