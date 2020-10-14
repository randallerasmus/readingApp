import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSentenceComponent } from './full-sentence.component';

describe('FullSentenceComponent', () => {
  let component: FullSentenceComponent;
  let fixture: ComponentFixture<FullSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
