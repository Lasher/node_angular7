import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { Album } from './albums.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  constructor(private albumsService: AlbumsService) {}

  albums: Array<Album>;
  cols = [];

  ngOnInit() {
    const a: Album = { id: 0, title: '', userId: 0 };
    this.cols = Object.getOwnPropertyNames(a);
    this.albums = [];
    this.albumsService
      .getAlbums()
      .pipe(take(1))
      .subscribe(result => {
        this.albums = result;
      });
  }
}
