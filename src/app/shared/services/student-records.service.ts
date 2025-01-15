import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StudentRecords } from "../../state/models/student-records.model";
import { ApiService } from "../../core/services/api.service";
import { EndpointConstants } from "../../core/constants/endpoint-constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StudentRecordsService {
  constructor(private apiService: ApiService) {}
  getStudentsRecords(): Observable<Array<StudentRecords>> {
    return this.apiService.get<Array<StudentRecords>>(
      EndpointConstants.STUDENT_RECORDS
    );
  }
  AddStudent(studentRecord: StudentRecords): Observable<StudentRecords> {
    return this.apiService.post<StudentRecords>(
      EndpointConstants.STUDENT_RECORDS,
      studentRecord
    );
  }
}
