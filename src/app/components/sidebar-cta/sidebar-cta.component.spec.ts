import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCtaComponent } from './sidebar-cta.component';

describe('SidebarCtaComponent', () => {
  let component: SidebarCtaComponent;
  let fixture: ComponentFixture<SidebarCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
