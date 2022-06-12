import { Component, OnDestroy, OnInit } from '@angular/core';
import { Soma } from './explicacao/post';
import { Photo } from './models/photo';
import { PhotosService } from './services/photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  lstPhotos: Photo[];
  constructor(private ps: PhotosService) { }

  ngOnInit(): void {
    this.listarPhotos();
  }



  listarPhotos() {
    this.ps.listar()
      .subscribe((photos: Photo[]) => { this.lstPhotos = photos }
        , (error) => {
          this.lstPhotos = [];
        }
      )
  }



}
