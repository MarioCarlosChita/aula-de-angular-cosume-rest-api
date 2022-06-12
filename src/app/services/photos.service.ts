import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private path: string = "/photos";

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(environment.BASEURL + this.path);
  }
  

}
