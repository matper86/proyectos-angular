import { TestBed } from '@angular/core/testing';

import { OrtorotoService } from './ortoroto.service';

describe('OrtorotoService', () => {
  let service: OrtorotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrtorotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
