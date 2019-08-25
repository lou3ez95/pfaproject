import { TestBed } from '@angular/core/testing';

import { ConfigsysService } from './configsys.service';

describe('ConfigsysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigsysService = TestBed.get(ConfigsysService);
    expect(service).toBeTruthy();
  });
});
