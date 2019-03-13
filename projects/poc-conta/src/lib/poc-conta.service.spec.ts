import { TestBed } from '@angular/core/testing';

import { PocContaService } from './poc-conta.service';

describe('PocContaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocContaService = TestBed.get(PocContaService);
    expect(service).toBeTruthy();
  });
});
