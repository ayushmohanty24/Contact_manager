import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpgComponent } from './registerpg.component';

describe('RegisterpgComponent', () => {
  let component: RegisterpgComponent;
  let fixture: ComponentFixture<RegisterpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
