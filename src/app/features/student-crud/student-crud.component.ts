import { Component, inject, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { StudentRecords } from "../../state/models/student-records.model";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { StudentRecordsService } from "../../shared/services/student-records.service";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";

@Component({
  selector: "app-student-crud",
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  templateUrl: "./student-crud.component.html",
  styleUrl: "./student-crud.component.scss",
})
export class StudentCRUDComponent implements OnInit {
  StudentForm!: FormGroup;
  studentRecordService = inject(StudentRecordsService);
  countries: string[] = ["USA", "Canada", "UK", "Australia", "India", "Other"];
  courses: string[] = [
    "Computer Science",
    "Engineering",
    "Business",
    "Arts",
    "Medicine",
  ];
  subjects: string[] = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Programming",
    "Literature",
  ];

  ngOnInit(): void {
    this.StudentForm = new FormGroup({
      // id: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      city: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      passportDeclaration: new FormControl("", [Validators.required]),
      fitnessDeclaration: new FormControl("", [Validators.required]),
      courseName: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      subjects: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\d{10}$/), // Example for 10-digit phone number
      ]),
      postalcode: new FormControl("", [
        Validators.required,
        Validators.pattern(/^\d{5,6}$/), // Example for 5-6 digit postal code
      ]),
    });
  }
  addStudent(): void {
    if (this.StudentForm.valid) {
      this.studentRecordService.AddStudent(this.StudentForm.value).subscribe({
        next: (response) => {
          console.log("Student record added successfully:", response);
          this.StudentForm.reset(); // Clear the form after submission
        },
        error: (error) => {
          console.error("Error adding student record:", error);
        },
      });
    }
  }
  isFieldInvalid(controlName: string): boolean {
    const control = this.StudentForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  isFieldRequired(controlName: string): boolean {
    const control = this.StudentForm.get(controlName);
    return !!(control && control.hasValidator(Validators.required));
  }
  getErrorMessage(controlName: string, fieldName: string): string {
    const control: AbstractControl | null = this.StudentForm.get(controlName);
    if (control?.hasError("required")) {
      return `${fieldName} is required`;
    }
    if (control?.hasError("email")) {
      return "Please enter a valid email address";
    }
    if (control?.hasError("minlength")) {
      return `${fieldName} must be at least ${control?.errors?.["minlength"].requiredLength} characters`;
    }
    if (control?.hasError("pattern")) {
      switch (fieldName.toLowerCase()) {
        case "phone":
          return "Please enter a valid 10-digit phone number";
        case "postal code":
          return "Please enter a valid postal code";
        default:
          return `Invalid ${fieldName} format`;
      }
    }
    return "";
  }
}
