//  Interface representing a product (book) in the system

export interface IProduct {
  title: string;
  author: string;
  price: number;
  category: "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious";
  description: string;
  quantity: number;
  inStock: boolean;
}
