import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateFilmComponent } from './create-film/create-film.component';
import { FilmListComponentComponent } from './film-list-component/film-list-component.component';
import { UpdatefilmComponent } from './updatefilm/updatefilm.component';
import { FilmdetailsComponent } from './filmdetails/filmdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'films', component: FilmListComponentComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'addfilm', component: CreateFilmComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'updatefilm/:id', component: UpdatefilmComponent },
  { path: 'filmdetails/:id', component: FilmdetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
