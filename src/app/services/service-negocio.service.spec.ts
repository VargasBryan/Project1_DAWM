import { TestBed } from '@angular/core/testing';

import { ServiceNegocioService } from './service-negocio.service';

describe('ServiceNegocioService', () => {
  let service: ServiceNegocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNegocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
