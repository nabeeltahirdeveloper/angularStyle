import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMailComponent } from './main-mail.component';

describe('MainMailComponent', () => {
  let component: MainMailComponent;
  let fixture: ComponentFixture<MainMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
