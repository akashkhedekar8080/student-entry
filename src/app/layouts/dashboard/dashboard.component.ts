import { Component } from "@angular/core";
import { StudentTableComponent } from "../../features/student-table/student-table.component";
import { StudentCRUDComponent } from "../../features/student-crud/student-crud.component";
import { ContactUsComponent } from "../../features/contact-us/contact-us.component";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    StudentTableComponent,
    StudentCRUDComponent,
    ContactUsComponent,
    MatTabsModule,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {}
