export interface Book {
  // subscribe(): unknown
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

}
export interface Login{
  email:string;
  role:string;
  token:string
}
export interface logUser{
  token: string
  user: {}
}
export interface Cart{
  id:string
  product_id:string
  quantity:number
  user_id:string
}
