import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params }).pipe(
      map((response) => response),
      catchError((error) => this.handleError(error))
    );
  }
  post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body).pipe(
      map((response) => response),
      catchError((error) => this.handleError(error))
    );
  }
  put<T, D>(url: string, body: D): Observable<T> {
    return this.http.put<T>(url, body).pipe(
      map((response) => response),
      catchError((error) => this.handleError(error))
    );
  }
  patch<T, D>(url: string, body: D): Observable<T> {
    return this.http.patch<T>(url, body).pipe(
      map((response) => response),
      catchError((error) => this.handleError(error))
    );
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url).pipe(
      map((response) => response),
      catchError((error) => this.handleError(error))
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // Client Side Error
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      //Server Side Error
      errorMessage = `Server Error: ${error.status} - ${
        error.statusText || "An error occurred"
      }`;
      if (error.error?.message) {
        errorMessage += `\nDetails: ${error.error.message}`;
      }
    }
    console.log("API Error", error);
    throw throwError(() => Error(errorMessage));
  }
}
