import { Routes } from "@angular/router";
import { authGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "dashboard",
    loadComponent: () =>
      import("./layouts/dashboard/dashboard.component").then(
        (c) => c.DashboardComponent
      ),
    // canActivate: [authGuard],
  },
  {
    path: "login",
    loadComponent: () =>
      import("./features/login/login.component").then((c) => c.LoginComponent),
  },
];
