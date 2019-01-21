import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Album } from './albums.model';

const BASE_URL = 'http://localhost:4000';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  public getAlbums(): Observable<Array<Album>> {
    const url = BASE_URL + '/albums';
    return this.http.get(url).pipe(
      map((result: Album[]) => {
        return result;
      })
    );
  }
}
