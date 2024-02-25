import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { Car } from '../../Interfaces/product';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent implements OnInit{
  cars: Car[] = []
  constructor(private main: MainService) {}
  ngOnInit(): void {
    this.main.getAllCar().subscribe(response => {
      this.cars = response
    })
  }


}
