import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMailCtaComponent } from './main-mail-cta.component';

describe('MainMailCtaComponent', () => {
  let component: MainMailCtaComponent;
  let fixture: ComponentFixture<MainMailCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMailCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMailCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
