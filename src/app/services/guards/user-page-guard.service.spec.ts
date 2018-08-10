import { TestBed, inject } from '@angular/core/testing';

import { UserPageGuardService } from './user-page-guard.service';

describe('UserPageGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPageGuardService]
    });
  });

  it('should be created', inject([UserPageGuardService], (service: UserPageGuardService) => {
    expect(service).toBeTruthy();
  }));
});
