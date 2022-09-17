export interface User {
  id: number;
  name: string;
  age: number;
  address: string;
}

export interface Vehicle {
  id: number;
  name: string;
  model: string;
  year: number;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
}

// generate 44 locations based on the interface above

export interface Database<T> {
  query: string;
  data: T[];
}
