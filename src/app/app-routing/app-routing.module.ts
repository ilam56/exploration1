import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { FormComponent} from '../form/form.component';
import { ViewComponent} from '../view/view.component';
import { FormGroup } from '@angular/forms';


const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: FormComponent},
  { path: 'view', component: ViewComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }