import { TestBed } from '@angular/core/testing';

import { AvailableInventoryService } from './available-inventory.service';

describe('AvailableInventoryService', () => {
  let service: AvailableInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
