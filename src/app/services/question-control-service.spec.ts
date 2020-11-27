import { TestBed } from '@angular/core/testing';

import { QuestionControlService } from './question-control-service';

describe('QuestionControlServiceService', () => {
  let service: QuestionControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
