import { TestBed } from '@angular/core/testing';

import { PijalechosaService } from './pijalechosa.service';

describe('PijalechosaService', () => {
  let service: PijalechosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PijalechosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
