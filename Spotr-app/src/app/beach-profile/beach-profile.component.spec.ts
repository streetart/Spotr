import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachProfileComponent } from './beach-profile.component';

describe('BeachProfileComponent', () => {
  let component: BeachProfileComponent;
  let fixture: ComponentFixture<BeachProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
