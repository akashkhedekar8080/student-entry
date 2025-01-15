import { TestBed } from '@angular/core/testing';

import { StudentRecordsService } from './student-records.service';

describe('StudentRecordsService', () => {
  let service: StudentRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
