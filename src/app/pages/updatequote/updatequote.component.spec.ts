import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequoteComponent } from './updatequote.component';

describe('UpdatequoteComponent', () => {
  let component: UpdatequoteComponent;
  let fixture: ComponentFixture<UpdatequoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatequoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
