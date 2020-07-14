import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSnackbarToasterComponent } from './alert-snackbar-toaster.component';

describe('AlertSnackbarToasterComponent', () => {
  let component: AlertSnackbarToasterComponent;
  let fixture: ComponentFixture<AlertSnackbarToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSnackbarToasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSnackbarToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
