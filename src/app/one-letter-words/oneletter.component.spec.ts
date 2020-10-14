import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneletterComponent } from './oneletter.component';

describe('OneletterComponent', () => {
  let component: OneletterComponent;
  let fixture: ComponentFixture<OneletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
