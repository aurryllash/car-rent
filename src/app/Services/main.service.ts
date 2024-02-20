import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Car } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAllCar(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}cars.json`)
  }
}
