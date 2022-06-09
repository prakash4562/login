import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDataComponent } from './total-data.component';

describe('TotalDataComponent', () => {
  let component: TotalDataComponent;
  let fixture: ComponentFixture<TotalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
