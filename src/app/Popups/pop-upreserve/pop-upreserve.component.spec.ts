import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpreserveComponent } from './pop-upreserve.component';

describe('PopUpreserveComponent', () => {
  let component: PopUpreserveComponent;
  let fixture: ComponentFixture<PopUpreserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopUpreserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
