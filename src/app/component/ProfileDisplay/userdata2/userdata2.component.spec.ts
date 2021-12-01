import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userdata2Component } from './userdata2.component';

describe('Userdata2Component', () => {
  let component: Userdata2Component;
  let fixture: ComponentFixture<Userdata2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userdata2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Userdata2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
