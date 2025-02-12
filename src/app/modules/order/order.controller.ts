import { Request, Response } from "express";
import { Order } from "./order.model";
import { Product } from "../product/product.model";

// Controller for handling order-related operations

const OrderController = {
  // Create a new order
  createOrder: async (req: Request, res: Response) => {
    try {
      const { product: productId, quantity, email } = req.body;

      // Validate required fields
      if (!productId || !quantity || !email) {
        return res.status(400).json({
          message: "Missing required fields",
          success: false,
          error: "ValidationError",
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          message: "Invalid email format",
          success: false,
          error: "ValidationError",
        });
      }

      // Find product to get price
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
          success: false,
          error: "ResourceNotFound",
        });
      }

      // Check if there is enough stock
      if (product.quantity < quantity) {
        return res.status(400).json({
          message: `Insufficient stock. Only ${product.quantity} items available`,
          success: false,
          error: "InsufficientStock",
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

      // Update product quantity and stock status
      const remainingQuantity = product.quantity - quantity;
      await Product.findByIdAndUpdate(productId, {
        quantity: remainingQuantity,
        inStock: remainingQuantity > 0,
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
  },

  // Calculate total revenue from all orders
  calculateRevenue: async (req: Request, res: Response) => {
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
  },

  // Get all orders
  getAllOrders: async (req: Request, res: Response) => {
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
  },

  //  Get a single order by ID

  getSingleOrder: async (req: Request, res: Response) => {
    try {
      const result = await Order.findById(req.params.orderId).populate(
        "product"
      );
      if (!result) {
        return res.status(404).json({
          message: "Order not found",
          success: false,
          error: "ResourceNotFound",
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
  },
};

export { OrderController };
