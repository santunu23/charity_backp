import { TestBed } from '@angular/core/testing';

import { HomeloadService } from './homeload.service';

describe('HomeloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeloadService = TestBed.get(HomeloadService);
    expect(service).toBeTruthy();
  });
});
