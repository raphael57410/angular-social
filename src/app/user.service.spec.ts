import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  const userServiceSpy = jasmine.createSpyObj('UserService',
    ['setIsConnected']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: userServiceSpy }]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('set is connected function to false', () => {
    expect(service.setIsConnected(false)).toBeFalse
  })

  it('set is connected function to true', () => {
    expect(service.setIsConnected(true)).toBeTrue
  })
});
