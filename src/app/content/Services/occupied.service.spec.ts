import { TestBed } from '@angular/core/testing';

import { OccupiedService } from './occupied.service';

describe('OccupiedService', () => {
  let service: OccupiedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccupiedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
