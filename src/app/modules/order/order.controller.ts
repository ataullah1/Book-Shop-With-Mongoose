import { Request, Response } from "express";
import { Order } from "./order.model";
import { Product } from "../product/product.model";

const createOrder = async (req: Request, res: Response) => {
  try {
    const { product: productId, quantity, email } = req.body;

    // Find product to get price
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Calculate total price
    const totalPrice = product.price * quantity;

    // Create order
    const order = await Order.create({
      email,
      product: productId,
      quantity,
      totalPrice,
    });

    // Update product quantity
    await Product.findByIdAndUpdate(productId, {
      $inc: { quantity: -quantity },
      inStock: product.quantity - quantity > 0,
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create order",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await Order.find().populate("product");
    res.status(200).json({
      success: true,
      message: "Orders retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get orders",
      error: error,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const result = await Order.findById(req.params.orderId).populate("product");
    res.status(200).json({
      success: true,
      message: "Order retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get order",
      error: error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
