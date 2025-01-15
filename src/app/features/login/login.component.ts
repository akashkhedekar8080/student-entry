import { Component, inject, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../core/services/auth.service";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true;
  isLoading = false;

  private router = inject(Router);
  private authService = inject(AuthService);
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }
  async loginUser() {
    if (this.loginForm.valid) {
      try {
        this.isLoading = true;
        await this.authService.login();
        await this.router.navigate(["/dashboard"]);
      } catch (error) {
        console.error("Login failed:", error);
        // Handle error (show snackbar/alert)
      } finally {
        this.isLoading = false;
      }
    }
  }
}
