import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: 'navbar', component: LandingComponent  },
  { path: 'main', component: MainComponent },
  { path: 'footer', component:  FooterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
