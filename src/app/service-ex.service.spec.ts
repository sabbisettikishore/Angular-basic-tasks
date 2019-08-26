import { TestBed } from '@angular/core/testing';

import { ServiceExService } from './service-ex.service';

describe('ServiceExService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceExService = TestBed.get(ServiceExService);
    expect(service).toBeTruthy();
  });
});
