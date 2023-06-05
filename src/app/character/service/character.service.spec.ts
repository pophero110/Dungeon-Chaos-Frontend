import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { HttpClientModule } from '@angular/common/http';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
