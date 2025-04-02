export interface ProductsType {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: Date | null;
}


export interface OrdersType {
  id: number,
  name: string;
  email: string;
  phone: string;
  address: string;
  quantity: number;
  productId: number | null;
  status: string | null;
  createdAt: Date | null;
}