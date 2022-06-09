import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyVotersComponent } from './key-voters.component';

describe('KeyVotersComponent', () => {
  let component: KeyVotersComponent;
  let fixture: ComponentFixture<KeyVotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyVotersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyVotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
