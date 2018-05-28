import { TestBed, inject } from '@angular/core/testing';

import { AngularFireService } from './angular-fire.service';

describe('AngularFireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularFireService]
    });
  });

  it('should be created', inject([AngularFireService], (service: AngularFireService) => {
    expect(service).toBeTruthy();
  }));
});
