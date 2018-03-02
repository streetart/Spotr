import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachCardsComponent } from './beach-cards.component';

describe('BeachCardsComponent', () => {
  let component: BeachCardsComponent;
  let fixture: ComponentFixture<BeachCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeachCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
