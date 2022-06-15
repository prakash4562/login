import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTabComponent } from './angular-tab.component';

describe('AngularTabComponent', () => {
  let component: AngularTabComponent;
  let fixture: ComponentFixture<AngularTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
