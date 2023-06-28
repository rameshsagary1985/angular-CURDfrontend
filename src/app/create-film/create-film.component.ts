import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { Router } from '@angular/router';
import { FilmserviceService } from '../filmservice.service';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit{
 
  submitted = false;
  film: Film = new Film();

  //constructor(private employeeService: EmployeeService,
   // private router: Router) { }
   constructor(private filmservice: FilmserviceService,private router:Router)
  {
    
  }
  ngOnInit() {
   
  }
  newFilm(): void {
    this.submitted = false;
    this.film = new Film();
  }
 



save()
{
  this.filmservice.createFilm(this.film).subscribe((data: any) =>{
    console.log(data)
    this.film=new Film();
    this.gotoList();
  },(error: any) => console.log(error));
}

gotoList() {
  this.router.navigate(['/films']);
}

  onSubmit() {
    this.submitted = true;
   this.save();    

  }
}
