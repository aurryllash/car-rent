import { Component, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { Car } from '../../Interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cars: Car[] = [];
  selectedCar!: Car;
  locations: string[] = ['Tbilisi', 'Batumi', 'Telavi', 'Gori', 'Kutaisi', 'Akhaltsikhe', 'Kobuleti', 'Rustavi'];
  showErrorMessage: boolean = false;

  constructor(private main: MainService, private fb: FormBuilder) {}

  carFormGroup: FormGroup = this.fb.group({
    carType: ['', Validators.required],
    pickUpLoc: ['', Validators.required],
    dropOfLoc: ['', Validators.required],
    pickUpDate: ['', Validators.required],
    dropOfDate: ['', Validators.required]
  })

  ngOnInit(): void {
    this.main.getAllCar().subscribe(response => {
      this.cars = response
    })
    this.selectedCar = this.cars[0]
  }

  selectCar(car: Car) {
    this.selectedCar = car;
  }

  OnSubmit() {
    if(this.carFormGroup.invalid) {
      this.showErrorMessage = true
    } else {
      this.showErrorMessage = false
    }
  }

}
