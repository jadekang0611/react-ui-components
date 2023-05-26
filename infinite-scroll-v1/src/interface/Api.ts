export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface Response {
  total: number;
  page: number;
  limit: number;
  data: Array<User>;
}

// export interface Airline {
//   id: number;
//   name: string;
//   country: string;
//   logo: string;
//   slogan: string;
//   head_quarters: string;
//   website: string;
//   established: string;
// }
