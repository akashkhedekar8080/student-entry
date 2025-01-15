import { createReducer, on } from "@ngrx/store";
import {
  callStudentsRecordsApi,
  callStudentsRecordsApiFailure,
  callStudentsRecordsApiSuccess,
} from "../actions/students-records.actions";
import { AppState } from "../selectors/student-records.selectors";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { StudentRecords } from "../models/student-records.model";

export interface StudentRecordsState extends EntityState<StudentRecords> {
  loading: boolean;
  error: string | null;
}
export const adapter: EntityAdapter<StudentRecords> =
  createEntityAdapter<StudentRecords>();

export const initialState: StudentRecordsState = adapter.getInitialState({
  loading: false,
  error: null,
});

// export const adapter: EntityAdapter<StudentRecords> =
//   createEntityAdapter<StudentRecords>({
//     selectId: (student) => student.id,
//   });

// export const initialState: AppState = {
//   studentRecords: [
//     {
//       name: "Akash",
//       city: "Ajmer",
//       country: "India",
//       passportDeclaration: "Yes",
//       fitnessDeclaration: "Yes",
//       courseName: "Match",
//       date: "14-11-1983",
//       state: "Rajasthan",
//       subjects: "Maths",
//       street: "5th street",
//       email: "akash@gmail.com",
//       phone: "21445989000",
//       postalcode: 12345,
//     },
//   ],
//   loading: false,
//   error: null,
// };

export const studentReducer = createReducer(
  initialState,
  on(callStudentsRecordsApi, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(callStudentsRecordsApiSuccess, (state, { studentRecords }) =>
    adapter.setAll(studentRecords, { ...state, loading: false, error: null })
  ),

  // on(callStudentsRecordsApiSuccess, (state, { studentRecords }) => ({
  // ...state,
  // studentRecords,
  // loading: false,
  // error: null,
  // })),
  on(callStudentsRecordsApiFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
