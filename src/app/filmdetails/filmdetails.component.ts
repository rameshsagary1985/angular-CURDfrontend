import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmserviceService } from '../filmservice.service';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.css']
})
export class FilmdetailsComponent implements OnInit {
  id:number | undefined;
  film : Film | undefined ;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private filmService: FilmserviceService) { }

    ngOnInit() {
      this.film = new Film();
  
      this.id = this.route.snapshot.params['id'];
      
      this.filmService.getFilm(this.id!)
        .subscribe((data: Film | undefined) => {
          console.log(data)
          this.film = data;
        }, (error: any) => console.log(error));
    }
  
    list(){
      this.router.navigate(['films']);
    }
  
}
