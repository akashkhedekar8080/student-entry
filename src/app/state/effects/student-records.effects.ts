import { inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { StudentRecordsService } from "../../shared/services/student-records.service";
import { createEffect } from "@ngrx/effects";
import {
  callStudentsRecordsApi,
  callStudentsRecordsApiFailure,
  callStudentsRecordsApiSuccess,
} from "../actions/students-records.actions";
import { catchError, of, exhaustMap, map } from "rxjs";
@Injectable()
export class StudentRecordsEffects {
  actions$ = inject(Actions);
  studentRecordService = inject(StudentRecordsService);
  loadStudentRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(callStudentsRecordsApi),
      exhaustMap(() =>
        this.studentRecordService.getStudentsRecords().pipe(
          map((studentRecords) =>
            callStudentsRecordsApiSuccess({ studentRecords })
          ),
          catchError((error) => of(callStudentsRecordsApiFailure({ error })))
        )
      )
    )
  );
}
