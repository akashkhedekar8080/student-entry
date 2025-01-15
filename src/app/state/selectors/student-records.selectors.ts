import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StudentRecords } from "../models/student-records.model";
import {
  adapter,
  StudentRecordsState,
} from "../reducers/student-records.reducers";

export interface AppState {
  // studentRecords: StudentRecords[];
  loading: boolean;
  error: any;
}

export const selectStudentRecordState =
  createFeatureSelector<StudentRecordsState>("studentRecords");

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// export const selectFeature = (state: AppState) => state.studentRecords;
// export const selectFeature = createFeatureSelector<AppState>("studentRecords");

// export const selectAll = createSelector(
//   selectFeature,
//   (state: StudentRecords[]) => state
// );

export const selectStudentEntities = createSelector(
  selectStudentRecordState,
  selectEntities
);
export const selectStudentByID = (id: number) =>
  createSelector(selectStudentEntities, (entities) => entities[id]);

export const selectAllStudentRecords = createSelector(
  selectStudentRecordState,
  selectAll
);
// export const selectAllStudentRecords = createSelector(
//   selectFeature,
//   (state) => state.studentRecords
// );
export const selectLoading = createSelector(
  selectStudentRecordState,
  (state) => state.loading
);
export const selectError = createSelector(
  selectStudentRecordState,
  (state) => state.error
);
// export const selectLoading = createSelector(
//   selectFeature,
//   (state) => state.loading
// );
// export const selectError = createSelector(
//   selectFeature,
//   (state) => state.error
// );
