const API_STUDENT = "/api/v1/student";
const BASE_URL = "http://localhost:8080"
export const environment= {
  API_BASE_URL: BASE_URL,
  USER_LOGIN: `${BASE_URL}/sign-in`,
  GET_ALL_STUDENTS: `${BASE_URL+API_STUDENT}/student-list`
}
