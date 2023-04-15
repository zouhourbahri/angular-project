import { TestBed } from '@angular/core/testing';

import { PostsGuardGuard } from './posts-guard.guard';

describe('PostsGuardGuard', () => {
  let guard: PostsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PostsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
