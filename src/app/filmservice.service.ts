import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmserviceService {

  private baseUrl="http://localhost:9092/springboot-crud-rest/api/v1/films";

  constructor(private http:HttpClient) { }


  getFilm(id:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  createFilm(film: Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,film);
  }


  getFilmsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


  updateFilm(id: number):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,{ responseType: 'text' });

  }

  deleteFilm(id: number): Observable<any>{
return this.http.delete(`${this.baseUrl}/${id}`,{ responseType: 'text' });
  }
 
}
