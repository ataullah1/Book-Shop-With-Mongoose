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
        message: "Product not found",
        success: false,
        error: "Resource not found",
      });
    }

    // Check if there is enough stock
    if (product.quantity < quantity) {
      return res.status(400).json({
        message: "Insufficient stock available",
        success: false,
        error: "Insufficient stock",
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
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to create order",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Revenue calculated successfully",
      data: {
        totalRevenue: revenue[0]?.totalRevenue || 0,
      },
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to calculate revenue",
      success: false,
      error: error.name,
      stack: error.stack,
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
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to get orders",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const result = await Order.findById(req.params.orderId).populate("product");
    if (!result) {
      return res.status(404).json({
        message: "Order not found",
        success: false,
        error: "Resource not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Order retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Failed to get order",
      success: false,
      error: error.name,
      stack: error.stack,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  calculateRevenue,
};
