import { createAction, props } from "@ngrx/store";
import { StudentRecords } from "../models/student-records.model";

export const actionList = {
  callStudentsRecordsApi: "[student data table] call student records api",
  callStudentsRecordsApiSuccess:
    "[student data table] call student records api success",
  callStudentsRecordsApiFailure:
    "[student data table] call student records api failure",
};

export const callStudentsRecordsApi = createAction(
  actionList.callStudentsRecordsApi
);
export const callStudentsRecordsApiSuccess = createAction(
  actionList.callStudentsRecordsApiSuccess,
  props<{ studentRecords: StudentRecords[] }>()
);
export const callStudentsRecordsApiFailure = createAction(
  actionList.callStudentsRecordsApiFailure,
  props<{ error: any }>()
);
