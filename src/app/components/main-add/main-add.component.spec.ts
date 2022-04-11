import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAddComponent } from './main-add.component';

describe('MainAddComponent', () => {
  let component: MainAddComponent;
  let fixture: ComponentFixture<MainAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
