import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLetterComponent } from './three-letter.component';

describe('ThreeLetterComponent', () => {
  let component: ThreeLetterComponent;
  let fixture: ComponentFixture<ThreeLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
