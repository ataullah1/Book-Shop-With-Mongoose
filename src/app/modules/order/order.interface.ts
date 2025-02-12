import { Types } from "mongoose";

//  Interface representing an order in the system

export interface IOrder {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
