export interface Book {
  id?: string
  name: string
  description: string
  price: string
  category_id: string
  product_image_url:string
}

export interface User {
  id?: number;
  email: string;
  phone: string;
  password: string;
  token?: string;
}
export interface logUser{
  email:string
  password:string
}
