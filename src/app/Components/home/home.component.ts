import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { Car } from '../../Interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cars: Car[] = [];
  selectedCar!: Car;

  constructor(private main: MainService) {}

  ngOnInit(): void {
    this.main.getAllCar().subscribe(response => {
      this.cars = response
    })
    this.selectedCar = this.cars[0]
  }

  selectCar(car: Car) {
    this.selectedCar = car;
  }

}
