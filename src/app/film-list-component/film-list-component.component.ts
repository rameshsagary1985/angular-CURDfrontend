import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../film';
import { FilmserviceService } from '../filmservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-list-component',
  templateUrl: './film-list-component.component.html',
  styleUrls: ['./film-list-component.component.css']
})
export class FilmListComponentComponent implements OnInit{
  
  films:Observable<Film[]> | undefined;
  constructor(private filmservice: FilmserviceService,private router: Router){}
  

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.films = this.filmservice.getFilmsList();
  }

  deleteFilm(id: number) {
    this.filmservice.deleteFilm(id)
      .subscribe(
        (        data: any) => {
          console.log(data);
          this.reloadData();
        },
        (        error: any) => console.log(error));
  }

 
 

  filmDetails(id: number){
    this.router.navigate(['filmdetails', id]);
  }

  updatefilm(id: number) {
    this.router.navigate(['updatefilm', id]);
  }
}
