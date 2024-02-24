import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Car } from '../../Interfaces/product';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-pop-upreserve',
  templateUrl: './pop-upreserve.component.html',
  styleUrl: './pop-upreserve.component.css'
})
export class PopUpreserveComponent implements OnInit{
  car: any = [];
  carImg!: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private main: MainService, public dialogref: MatDialogRef<PopUpreserveComponent>) {}
  ngOnInit(): void {
    this.car = this.data.carData
    this.main.getCarByModel(this.car.carType).subscribe(res => {
      this.carImg = res
    })
  }

  close(): void {
    this.dialogref.close();
  }
  
}
