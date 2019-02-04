import { TestBed } from '@angular/core/testing';

import { GenerateTableService } from './generate-table.service';

describe('GenerateTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateTableService = TestBed.get(GenerateTableService);
    expect(service).toBeTruthy();
  });
});
