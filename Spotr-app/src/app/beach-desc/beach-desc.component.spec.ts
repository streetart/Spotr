import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachDescComponent } from './beach-desc.component';

describe('BeachDescComponent', () => {
  let component: BeachDescComponent;
  let fixture: ComponentFixture<BeachDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
