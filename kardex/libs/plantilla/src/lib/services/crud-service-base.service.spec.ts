import { TestBed } from '@angular/core/testing';

import { CrudServiceBaseService } from './crud-service-base.service';

describe('CrudServiceBaseService', () => {
  let service: CrudServiceBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiceBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
