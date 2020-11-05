import { TestBed } from '@angular/core/testing';

import { TokenIntercectorService } from './token-intercector.service';

describe('TokenIntercectorService', () => {
  let service: TokenIntercectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenIntercectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
