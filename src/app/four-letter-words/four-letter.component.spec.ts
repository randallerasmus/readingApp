import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourLetterComponent } from './four-letter.component';

describe('FourLetterComponent', () => {
  let component: FourLetterComponent;
  let fixture: ComponentFixture<FourLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
