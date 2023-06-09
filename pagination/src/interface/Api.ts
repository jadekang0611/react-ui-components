export interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Array<Airline>;
  __v: number;
}

export interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

export interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quarters: string;
  website: string;
  established: string;
}
