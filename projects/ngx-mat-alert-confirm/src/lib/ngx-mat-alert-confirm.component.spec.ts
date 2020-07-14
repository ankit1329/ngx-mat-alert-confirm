import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatAlertConfirmComponent } from './ngx-mat-alert-confirm.component';

describe('NgxMatAlertConfirmComponent', () => {
  let component: NgxMatAlertConfirmComponent;
  let fixture: ComponentFixture<NgxMatAlertConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatAlertConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatAlertConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
