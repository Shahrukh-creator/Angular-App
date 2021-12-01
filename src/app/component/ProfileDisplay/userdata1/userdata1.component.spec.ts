import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdata1Component } from './userdata1.component';

describe('Userdata1Component', () => {
  let component: Userdata1Component;
  let fixture: ComponentFixture<Userdata1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userdata1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Userdata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
