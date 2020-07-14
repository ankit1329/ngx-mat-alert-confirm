import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertDialogueConfirmComponent } from './alert-dialogue-confirm.component';

describe('AlertDialogueConfirmComponent', () => {
  let component: AlertDialogueConfirmComponent;
  let fixture: ComponentFixture<AlertDialogueConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDialogueConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertDialogueConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
