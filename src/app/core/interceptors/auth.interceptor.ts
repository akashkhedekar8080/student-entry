import { HttpInterceptorFn } from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("access-token");
  const headers = {
    "Content-type": "application/json",
    Accept: "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  const cloneRequest = req.clone({
    setHeaders: headers,
  });

  return next(cloneRequest);
};
