import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLetterWordsComponent } from './two-letter-words.component';

describe('TwoLetterWordsComponent', () => {
  let component: TwoLetterWordsComponent;
  let fixture: ComponentFixture<TwoLetterWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoLetterWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLetterWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
