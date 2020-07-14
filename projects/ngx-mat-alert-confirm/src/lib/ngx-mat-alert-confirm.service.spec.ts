import { TestBed } from '@angular/core/testing';

import { NgxMatAlertConfirmService } from './ngx-mat-alert-confirm.service';

describe('NgxMatAlertConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxMatAlertConfirmService = TestBed.get(NgxMatAlertConfirmService);
    expect(service).toBeTruthy();
  });
});
