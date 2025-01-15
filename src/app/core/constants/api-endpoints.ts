import { environment } from "../../../environments/environment.development";

export const apiBaseURL = environment.apiBaseURL;
export interface AuthEndPoint {
  login: string;
  logout: string;
  refreshToken: string;
}
export interface StudentEndPoint {
  records: string;
}

export interface ApiEndPoints {
  auth: AuthEndPoint;
  student: StudentEndPoint;
}
export const ApiEndPoints: ApiEndPoints = {
  auth: {
    login: `${apiBaseURL}/login`,
    logout: `${apiBaseURL}/logout`,
    refreshToken: `${apiBaseURL}/refreshToken`,
  },
  student: {
    records: `${apiBaseURL}/studentRecords`,
  },
};
