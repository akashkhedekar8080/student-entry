import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { studentReducer } from "./state/reducers/student-records.reducers";
import { provideEffects } from "@ngrx/effects";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { StudentRecordsEffects } from "./state/effects/student-records.effects";
import { provideRouterStore, routerReducer } from "@ngrx/router-store";
import { authInterceptor } from "./core/interceptors/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ studentRecords: studentReducer, router: routerReducer }),
    provideEffects(StudentRecordsEffects),
    // provideStore()
    // provideState({ name: "studentRecords", reducer: studentReducer }),
    provideStoreDevtools({
      maxAge: 25, // Keep history of last 25 states
      logOnly: !isDevMode(), // Restrict to log-only mode in production

      // Automatically pause recording actions and state changes
      // when the extension window is not open
      autoPause: true,

      // Ensures the Redux DevTools connection happens within the Angular zone
      // This prevents unexpected change detection issues
      connectInZone: true,
    }),
    provideAnimationsAsync(),
    provideEffects(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouterStore(),
  ],
};
