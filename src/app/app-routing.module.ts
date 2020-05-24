import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
//import { NavBar } from './navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent},  
  { path: 'service', component: ServicesComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
