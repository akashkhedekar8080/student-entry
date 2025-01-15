import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { Store } from "@ngrx/store";
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
  takeUntil,
} from "rxjs";

import {
  AppState,
  selectAllStudentRecords,
  selectStudentByID,
} from "../../state/selectors/student-records.selectors";
import * as Actions from "../../state/actions/students-records.actions";
import { StudentRecords } from "../../state/models/student-records.model";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: "app-student-table",
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./student-table.component.html",
  styleUrl: "./student-table.component.scss",
})
export class StudentTableComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();
  store: Store<AppState> = inject(Store);
  dataSource = new MatTableDataSource<StudentRecords>();
  studentControl: FormControl = new FormControl();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource$: Observable<StudentRecords[]> = this.store.select(
    selectAllStudentRecords
  );
  columnToDisplay: string[] = [
    "Name",
    "Country",
    "City",
    "Passport Declaration",
    "Fitness Declaration",
    "Course Name",
    "Date",
    "State",
    "Street",
    "Subjects",
    "Email",
    "Phone",
    "Postal Code",
  ];
  ngOnInit(): void {
    this.store.dispatch(Actions.callStudentsRecordsApi());
    this.dataSource$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: StudentRecords[]) => {
        this.dataSource.data = res;
        console.log(res);
      });
    this.studentControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((id: number) =>
          this.store
            .select(selectStudentByID(id))
            .pipe(takeUntil(this.destroy$))
        )
      )
      .subscribe((filteredRecord: StudentRecords | undefined) => {
        this.dataSource.data = filteredRecord ? [filteredRecord] : []; // Ensure it's always an array
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy(): void {
    // Complete the subject to avoid memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }
}
