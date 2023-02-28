export interface Book {
  booktitle: string
  author: string
  description: string
  image: string
  price: string
}

export interface User {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  token?: string;
}
