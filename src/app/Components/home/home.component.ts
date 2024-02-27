import { Component, HostListener, OnInit } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { Car } from '../../Interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpreserveComponent } from '../../Popups/pop-upreserve/pop-upreserve.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  cars: Car[] = [];
  selectedCar!: Car;
  N!: Car;
  locations: string[] = ['Tbilisi', 'Batumi', 'Telavi', 'Gori', 'Kutaisi', 'Akhaltsikhe', 'Kobuleti', 'Rustavi'];
  showErrorMessage: boolean = false;
  showReservationMessage: boolean = false;
  showScrollButton: boolean = false;

  constructor(private main: MainService, private fb: FormBuilder, public dialog: MatDialog) {
    
   }

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
      this.selectedCar = this.cars[0]
    })
    
  }

  selectCar(car: Car) {
    this.selectedCar = car;
  }

  

  OnSubmit(): void {
    if(this.carFormGroup.invalid) {
      this.showErrorMessage = true
    } else {
      this.showErrorMessage = false
      const dialogref = this.dialog.open(PopUpreserveComponent, {
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        width: '1000px',
        data: {
          carData: this.carFormGroup.value,
          reserved: this.showReservationMessage
        }
      });
      dialogref.afterClosed().subscribe(result => {
        console.log('The dialog was closed', result);
        this.showReservationMessage = result
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 0;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
