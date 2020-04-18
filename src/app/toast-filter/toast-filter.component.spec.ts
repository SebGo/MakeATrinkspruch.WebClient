import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastFilterComponent } from './toast-filter.component';

describe('ToastFilterComponent', () => {
  let component: ToastFilterComponent;
  let fixture: ComponentFixture<ToastFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
