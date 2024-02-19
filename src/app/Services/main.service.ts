import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }
  getAllCar() {
    return this.http.get(`${this.baseUrl}cars.json`)
  }
}
