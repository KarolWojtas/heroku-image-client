import { TestBed, inject } from '@angular/core/testing';

import { UserAccountPageGuardService } from './user-account-page-guard.service';

describe('UserAccountPageGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAccountPageGuardService]
    });
  });

  it('should be created', inject([UserAccountPageGuardService], (service: UserAccountPageGuardService) => {
    expect(service).toBeTruthy();
  }));
});
