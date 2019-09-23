import { TestBed } from '@angular/core/testing';

import { LoginGuard } from './login.guard.service';

describe('Login.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGuard = TestBed.get(LoginGuard);
    expect(service).toBeTruthy();
  });
});
