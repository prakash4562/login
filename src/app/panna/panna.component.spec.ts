import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannaComponent } from './panna.component';

describe('PannaComponent', () => {
  let component: PannaComponent;
  let fixture: ComponentFixture<PannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PannaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
