import { TestBed } from '@angular/core/testing';

import { AstrologersService } from './astrologers.service';

describe('AstrologersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AstrologersService = TestBed.get(AstrologersService);
    expect(service).toBeTruthy();
  });
});
