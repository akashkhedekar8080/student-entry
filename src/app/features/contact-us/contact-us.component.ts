import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "app-contact-us",
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: "./contact-us.component.html",
  styleUrl: "./contact-us.component.scss",
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  subjects = [
    "General Inquiry",
    "Technical Support",
    "Billing Question",
    "Feature Request",
    "Report an Issue",
    "Other",
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  private createForm(): void {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.pattern("^[0-9]{10}$")]],
      subject: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log("Form submitted:", this.contactForm.value);
      // Handle form submission
      this.contactForm.reset();
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
}
