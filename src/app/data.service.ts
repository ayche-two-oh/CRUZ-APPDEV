import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from './modal/modal';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getShows(): Observable<Show[]> {  
    return this.http.get<any[]>('https://api.tvmaze.com/search/shows?q=a').pipe(
      map(response => {
        return response.map(item => ({
          name: item.show.name,
          genres: item.show.genres.join(', ')
        })) as Show[];
      })
    );
  }
}
