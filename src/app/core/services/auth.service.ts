import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { EndpointConstants } from "../constants/endpoint-constants";
import { Login } from "../models/login";
import { BehaviorSubject, delay, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private apiService: ApiService) {}
  isLoggedIn$ = new BehaviorSubject<boolean>(false);
  login() {
    this.isLoggedIn$.next(true);
    // return of(true).pipe(tap(() => this.isLoggedIn$.next(true)));
    // this.apiService.post<Login>(EndpointConstants.LOGIN, { email,
    //  });
  }
  logout(): void {
    this.isLoggedIn$.next(false);
  }
}
