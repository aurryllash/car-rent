import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';
import { Car } from '../Interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = environment.apiUrl
  carByModel!: string;
  constructor(private http: HttpClient) { }

  getAllCar(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}cars.json`)
  }

  getCarByModel(model: string): Observable<string> {
    return this.http.get<Car[]>(`${this.baseUrl}cars.json`).pipe(
      map(cars => {
        const car = cars.find(n => n.model === model)
        return car ? car.img : '';
      })
    )
  }
}
